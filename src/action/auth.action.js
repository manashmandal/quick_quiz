import { getUser } from './../dumy_db_manage/dumy_queries/users.queries'

const ROOT_URL = ''
const sudoFetch = (api, request) => getUser({ ...JSON.parse(request.body) })

export function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };

    dispatch({ type: 'REQUEST_LOGIN' });
    let response = sudoFetch(`${ROOT_URL}/login`, requestOptions);

    if (response) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: response });
        localStorage.setItem('currentUser', JSON.stringify(response));
        return response
    }

    dispatch({ type: 'LOGIN_ERROR', error: 'User not found' });
    return;

}

export function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
}

export function isAuthenticated() {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('currentUser')) {
        return JSON.parse(localStorage.getItem('currentUser'));
    } else {
        return false;
    }
};