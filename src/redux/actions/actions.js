// All actions
import * as types from './actionTypes';
export const userLoading = () => ({
    type: types.USER_LOADING,
})
export const userLoaded = () => ({
    type: types.USER_LOADED,
})
export const removeUser = () => ({
    type: types.REMOVE_USER,
})
export const googleJoin = (user) => {
    return {
        type: types.USER_LOGGEDIN,
        payload: user
    }
}
export const loadBlogs = (blogs) => {
    return {
        type: types.BLOGS,
        payload: blogs
    }
}