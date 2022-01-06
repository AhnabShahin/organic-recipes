import * as types from "../actions/actionTypes";

// User reducer for user State management
const initialState = []

const blogsReducer=(state=initialState, action)=>{
    switch(action.type){
        case types.BLOGS:
            return action.payload;   
        default:
            return state;
    }
}
export default blogsReducer;