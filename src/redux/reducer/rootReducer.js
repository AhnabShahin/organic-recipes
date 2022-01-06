// Combine ALL Reducers

import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import userReducer from './userReducer';

const rootReducer= combineReducers({
    user: userReducer,
    blogs:blogsReducer,
})
export default rootReducer;