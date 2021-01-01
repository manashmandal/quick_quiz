import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from './types.js'

let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null

export const initialState = {
    userDetails: user,
    loading: false,
    error: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                userDetails: action.payload.user,
                loading: false,
                error: null
            }
        case LOGOUT:
            return {
                ...state,
                userDetails: null,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default authReducer