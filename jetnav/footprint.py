def measure(stage,path='/World/Jetbot'):
    from pxr import Usd,UsdGeom,UsdPhysics,Gf
    bounds=Gf.Range3d(); cache=UsdGeom.BBoxCache(Usd.TimeCode.Default(),['default','render','proxy'])
    count=0
    for prim in Usd.PrimRange(stage.GetPrimAtPath(path),Usd.TraverseInstanceProxies()):
        if prim.HasAPI(UsdPhysics.CollisionAPI):
            box=cache.ComputeWorldBound(prim).ComputeAlignedRange()
            if not box.IsEmpty(): bounds.UnionWith(box);count+=1
    if count==0: raise RuntimeError('No robot collision geometry; refusing guessed footprint')
    size=bounds.GetSize(); lo=bounds.GetMin()
    return {'size':list(size),'circumscribed_radius':float((size[0]**2+size[1]**2)**.5/2),'minimum_z':float(lo[2]),'collider_count':count}


def wheel_geometry(stage,path='/World/Jetbot'):
    """Measure rolling radius and contact-track spacing from authored wheel colliders."""
    from pxr import Usd,UsdGeom,Gf
    cache=UsdGeom.BBoxCache(Usd.TimeCode.Default(),['default','render','proxy'])
    centers=[];radii=[];boxes=[]
    for side in ['left','right']:
        prim=stage.GetPrimAtPath(path+'/'+side+'_wheel/Collision')
        if not prim: raise RuntimeError('Missing wheel collider')
        bounds=cache.ComputeWorldBound(prim).ComputeAlignedRange()
        size=bounds.GetSize();center=bounds.GetMidpoint()
        centers.append(np_array(center));radii.append(float(size[2]/2));boxes.append(list(size))
    import numpy as np
    spacing=float(np.linalg.norm(centers[0][:2]-centers[1][:2]))
    if not .01<min(radii)<.1 or not .05<spacing<.3: raise ValueError('Implausible JetBot wheel dimensions')
    root_z=float(UsdGeom.XformCache().GetLocalToWorldTransform(stage.GetPrimAtPath(path)).ExtractTranslation()[2])
    origin_height=float(np.mean(radii)-(np.mean([x[2] for x in centers])-root_z))
    return {'root_height_above_ground_m':origin_height,'radius_m':float(np.mean(radii)),'separation_m':spacing,'collider_sizes':boxes,'collider_centers':[x.tolist() for x in centers],'source':'authored wheel collider geometry'}


def np_array(value):
    import numpy as np
    return np.array(list(value),float)
