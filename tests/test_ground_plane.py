import cv2
import numpy as np
from jetnav.ground_plane import consistent_floor,observed_floor_cells


def test_floor_geometry_accepts_floor_and_rejects_raised_surface_and_no_motion():
    rng=np.random.default_rng(19)
    gray=cv2.GaussianBlur(rng.integers(0,256,(120,160),dtype=np.uint8),(3,3),.7)
    image=np.repeat(gray[:,:,None],3,axis=2)
    K=np.array([[120.,0,80],[0,120.,60],[0,0,1.]])
    first=np.eye(4);first[:3,:3]=np.diag([1,-1,-1]);first[2,3]=1.
    second=first.copy();second[0,3]=.2
    def shifted(pixels):return cv2.warpAffine(image,np.float32([[1,0,-pixels],[0,1,0]]),(160,120))
    points,mask=consistent_floor(image,shifted(24),K,first,second)
    assert mask.sum()>10000
    np.testing.assert_allclose(points[mask,2],0,atol=1e-12)
    # A surface 0.5 m above the floor has twice the displacement; it must not
    # become free floor simply because it has the same rich texture.
    _,raised=consistent_floor(image,shifted(48),K,first,second)
    assert raised.sum()<10
    assert not consistent_floor(image,image,K,first,first)[1].any()
    blank=np.full_like(image,128)
    assert not consistent_floor(blank,blank,K,first,second)[1].any()
    # Horizontal bands have variance but cannot disambiguate horizontal
    # translation: every candidate plane explains them equally well.
    stripes=np.repeat(rng.integers(0,256,(120,1,1),dtype=np.uint8),160,axis=1)
    stripes=np.repeat(stripes,3,axis=2)
    assert consistent_floor(stripes,stripes,K,first,second)[1].sum()>10000
    assert not consistent_floor(stripes,stripes,K,first,second,reject_ambiguous=True)[1].any()
    assert consistent_floor(image,shifted(24),K,first,second,reject_ambiguous=True)[1].sum()>8000


def test_cell_projection_requires_full_floor_evidence():
    mask=np.ones((120,160),bool);K=np.array([[120.,0,80],[0,120.,60],[0,0,1.]])
    camera=np.eye(4);camera[:3,:3]=np.diag([1,-1,-1]);camera[:3,3]=[2,3,1]
    before=observed_floor_cells(mask,K,camera,shape=(80,80),resolution=.1)
    assert before[30,20] and not before[0,0]
    mask[60,80]=False
    after=observed_floor_cells(mask,K,camera,shape=(80,80),resolution=.1)
    assert not after[30,20]
    assert np.all(~after|before)
