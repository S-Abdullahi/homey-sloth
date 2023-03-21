import { OPEN_SIDE_BAR, CLOSE_SIDE_BAR, GRID_VIEW, LIST_VIEW } from "../actions"

const reducer = (state, action) =>{
    if(action.type === OPEN_SIDE_BAR){
        return {...state, openSideBar: true, closeSideBar: false}
    }
    if(action.type === CLOSE_SIDE_BAR){
        return {...state, closeSideBar: true, openSideBar: false}
    }
    if(action.type===GRID_VIEW){
        return {...state, gridView: true, listView: false}
    } 
    if(action.type === LIST_VIEW){
        return {...state, listView: true, gridView: false}
    }
}

export default reducer