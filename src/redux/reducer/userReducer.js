// User reducer for user State management
const initialState = {
    loading: false,
    currentUser: null,
    error: null
}

const userReducer=(state=initialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default userReducer;