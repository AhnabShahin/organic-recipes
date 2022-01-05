import * as types from "../actions/actionTypes";

// User reducer for user State management
const initialState = {
    loading: true,
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
        case types.USER_LOADED:
            return{
                ...state,
                loading: false
            }
        case types.REMOVE_USER:
            return{
                loading: false,
                currentUser: null,
                error: null
            }
            
        case types.USER_LOGGEDIN:
            return{
                loading: false,
                currentUser: action.payload,
                error: null
            }
            
        default:
            return state;
    }
}
export default userReducer;