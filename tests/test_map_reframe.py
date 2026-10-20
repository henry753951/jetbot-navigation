import numpy as np
from jetnav.navigation import GridMap
from jetnav.map_reframe import reframe_grid


def test_identity_keeps_known_unknown_and_obstacles_exactly():
    cells=np.zeros((8,8),np.int8);cells[0]=-1;cells[3,4]=100
    grid=GridMap(cells,resolution=.1,metadata={'position_uncertainty_m':.3})
    result=reframe_grid(grid,np.eye(2),[0,0],'new','test')
    np.testing.assert_array_equal(result.grid,cells)
    assert result.metadata['position_uncertainty_m']==.3
    assert result.radius==grid.radius and result.margin==grid.margin


def test_subcell_translation_cannot_clear_partially_obstructed_cell():
    cells=np.zeros((8,8),np.int8);cells[3,3]=100
    result=reframe_grid(GridMap(cells,resolution=1.),np.eye(2),[.5,0],'new','test')
    assert np.all(result.grid[:,0]==-1)
    assert result.grid[3,3]==100 and result.grid[3,4]==100
    assert result.grid[3,5]==0


def test_rotated_free_cells_have_only_free_source_samples():
    cells=np.zeros((20,20),np.int8);cells[7:10,6:9]=100;cells[12:15,12:15]=-1
    grid=GridMap(cells,resolution=.1)
    angle=.13;matrix=np.array([[np.cos(angle),-np.sin(angle)],[np.sin(angle),np.cos(angle)]])
    offset=np.array([.08,-.03]);result=reframe_grid(grid,matrix,offset,'new','test')
    assert (result.grid==0).sum()>100
    for y,x in np.argwhere(result.grid==0):
        for dx in [.001,.5,.999]:
            for dy in [.001,.5,.999]:
                old=(np.array([x+dx,y+dy])*.1-offset)@np.linalg.inv(matrix).T
                sy,sx=grid.cell(old)
                assert 0<=sy<20 and 0<=sx<20 and cells[sy,sx]==0
