import numpy as np
from jetnav.mapping import OccupancyMapper


def reference_ray(mapper, origin, end, hit):
    """Original scalar behavior, retained to check the optimized accumulator."""
    a=np.asarray(origin[:2])/mapper.resolution
    b=np.asarray(end[:2])/mapper.resolution
    cells=np.unique(np.floor(np.linspace(a,b,max(2,int(np.linalg.norm(b-a)*2)+1))).astype(int),axis=0)
    target=tuple(np.floor(b).astype(int))
    for x,y in cells:
        if 0<=y<mapper.logodds.shape[0] and 0<=x<mapper.logodds.shape[1]:
            mapper.logodds[y,x]=np.clip(mapper.logodds[y,x]+(.85 if hit and (x,y)==target else -.4),-5,5)
            mapper.observed[y,x]=True


def test_vectorized_rays_preserve_hits_bounds_and_saturation():
    actual=OccupancyMapper(shape=(20,30),resolution=.1)
    reference=OccupancyMapper(shape=(20,30),resolution=.1)
    rng=np.random.default_rng(42)
    rays=[([.5,.5],[1.,1.],True)]*30 + [([1.,1.],[.5,.5],False)]*30
    rays += [([-2.,-2.],[-1.,-1.],True),([1.,1.],[1.,1.],True)]
    rays += [(rng.uniform(-.5,3.5,2),rng.uniform(-.5,3.5,2),bool(i%2)) for i in range(100)]
    for origin,end,hit in rays:
        actual.ray(origin,end,hit)
        reference_ray(reference,origin,end,hit)
    np.testing.assert_array_equal(actual.logodds,reference.logodds)
    np.testing.assert_array_equal(actual.observed,reference.observed)
    np.testing.assert_array_equal(actual.grid().grid,reference.grid().grid)
