import * as types from "../actions/actionTypes";

// User reducer for user State management
const initialState = {
    loading: false,
    currentUser: null,
    error: null
}

const userReducer=(state=initialState, action)=>{
    switch(action.type){
        case types.USER_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
export default userReducer;