"""Procedural, redistributable room and explicit oracle occupancy for baseline tests."""
import json
from pathlib import Path
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
SIZE = (12., 10.)
# x, y, width, depth, height; all objects rest on floor.
BOXES = [
 ('south',6,.08,12,.16,2.4),('north',6,9.92,12,.16,2.4),
 ('west',.08,5,.16,10,2.4),('east',11.92,5,.16,10,2.4),
 ('partition_a',5,2,.16,4,2.4),('partition_b',5,8,.16,4,2.4),
 ('partition_c',8.5,6,3,.16,2.4),
 ('sofa',2,7,2.2,.8,.7),('table',2.5,4,1.4,.9,.65),
 ('shelf',.6,8.8,.7,1.7,1.6),('desk',9,8.5,2,.8,.75),
 ('island',8,2.8,1.5,1.2,.9),('box_a',10.4,4.5,.65,.65,.5),
 ('box_b',6.5,7.7,.6,.8,.4),('chair',9,7.2,.5,.5,.55),
 ('cabinet',11.4,1.5,.7,2,1.3)]

def oracle_grid(resolution=.05):
    w,h = (int(s/resolution) for s in SIZE)
    y,x=np.mgrid[:h,:w]; x=(x+.5)*resolution; y=(y+.5)*resolution
    grid=np.zeros((h,w),np.int8)
    for _,cx,cy,sx,sy,_ in BOXES:
        grid[(abs(x-cx)<=sx/2+resolution/2)&(abs(y-cy)<=sy/2+resolution/2)]=100
    return grid

def build_stage(path):
    from pxr import Usd, UsdGeom, UsdPhysics, UsdLux, Gf
    stage=Usd.Stage.CreateNew(str(path))
    stage.SetStartTimeCode(0); stage.SetEndTimeCode(100000); stage.SetTimeCodesPerSecond(60)
    world=UsdGeom.Xform.Define(stage,'/World'); stage.SetDefaultPrim(world.GetPrim())
    UsdGeom.SetStageUpAxis(stage,UsdGeom.Tokens.z); UsdGeom.SetStageMetersPerUnit(stage,1.)
    def cube(name,pos,scale,color,collision=True):
        c=UsdGeom.Cube.Define(stage,'/World/Room/'+name); c.CreateSizeAttr(1)
        c.AddTranslateOp().Set(Gf.Vec3d(*pos)); c.AddScaleOp().Set(Gf.Vec3f(*scale))
        c.CreateDisplayColorAttr([Gf.Vec3f(*color)])
        if collision: UsdPhysics.CollisionAPI.Apply(c.GetPrim())
    cube('floor',(6,5,-.1),(12,10,.2),(.28,.32,.36))
    rng=np.random.default_rng(42)
    for i,(name,x,y,w,d,h) in enumerate(BOXES):
        cube(name,(x,y,h/2),(w,d,h),tuple(rng.uniform(.18,.75,3)))
        # Asymmetric visual features on object sides, no artificial sensor labels.
        for j in range(12):
            z=float(rng.uniform(.12,min(h-.02,1.6)))
            xx=x+float(rng.uniform(-w*.42,w*.42))
            cube(f'{name}_pattern_{j}',(xx,y-d/2-.003,z),(.06,.004,.06),tuple(rng.uniform(.02,.95,3)),False)
        for j in range(45):
            z=float(rng.uniform(.1,min(h-.01,1.8)))
            yy=y+float(rng.uniform(-d*.46,d*.46))
            for side in (-1,1):
                cube(f'{name}_side_{side+1}_{j}',(x+side*(w/2+.003),yy,z),(.004,.05,.07),tuple(rng.uniform(.01,.95,3)),False)
    # Small floor pattern tiles provide non-repeating texture at JetBot camera height.
    for j in range(1200):
        x,y=rng.uniform([.2,.2],[11.8,9.8]); shade=rng.uniform(.15,.55)
        cube(f'tile_{j}',(float(x),float(y),.001),(.06,.09,.002),(shade,shade*.9,shade*.8),False)
    dome=UsdLux.DomeLight.Define(stage,'/World/Light'); dome.CreateIntensityAttr(650)
    sun=UsdLux.DistantLight.Define(stage,'/World/Sun'); sun.CreateIntensityAttr(1200)
    sun.AddRotateXYZOp().Set(Gf.Vec3f(-35,20,-25))
    cam=UsdGeom.Camera.Define(stage,'/World/Overview')
    eye=Gf.Vec3d(6,5,17); target=Gf.Vec3d(6,5,0)
    cam.AddTransformOp().Set(Gf.Matrix4d().SetLookAt(eye,target,Gf.Vec3d(0,1,0)).GetInverse())
    cam.CreateProjectionAttr('orthographic'); cam.CreateHorizontalApertureAttr(140)
    cam.CreateVerticalApertureAttr(115); cam.CreateClippingRangeAttr(Gf.Vec2f(.01,100))
    stage.GetRootLayer().Save()
    return stage

if __name__=='__main__':
    (ROOT/'assets').mkdir(exist_ok=True)
    stage=build_stage(ROOT/'assets/room.usda')
    np.savez_compressed(ROOT/'assets/oracle_map.npz',grid=oracle_grid(),resolution=.05,origin=[0.,0.],source='oracle_geometry')
    print(f'Created room: {len(list(stage.Traverse()))} prims')
