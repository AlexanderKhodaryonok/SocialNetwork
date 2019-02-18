import {setStatus, statuses} from "./loginPageReducer";
import axios from '../axios/axios-instance';

const initialState = {
    isAuth: false,
    userInfo: {
        userName: null,
        avatarUrl: null,
        userId: null
    }
};

const SET_IS_AUTH = 'NETWORK/LOGIN/SET_IS_AUTH';
const SET_USER_INFO = 'NETWORK/LOGIN/SET_USER_INFO';

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state, isAuth: action.value
            };
        case SET_USER_INFO:
            return {
                ...state, userInfo: {
                    ...state.userInfo,
                    userName: action.userName,
                    userId: action.userId
                }
            };
        default:
            return state;
    }
};

export default authReducer;

export const setIsAuth = (bool) => ({type: SET_IS_AUTH, value: bool});
export const setUserInfo = (userId, userName,) => ({type: SET_USER_INFO, userId, userName});

export const logout = () => (dispatch) => {
    axios.post('auth/logout')
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(false));
                dispatch(setUserInfo(null, null));
            }
        })
};

export const me = () => (dispatch) => {
    axios.get('auth/me')
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(true));
                dispatch(setUserInfo(res.data.data.id, res.data.data.login));
            }
        })
};

function makeCopyAuthData(state) {
    let stateCopy = {
        ...state,
        userInfo: {
            ...state.userInfo
        }
    };
    return stateCopy;
}

/*
const authReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SET_IS_AUTH:
            stateCopy = makeCopyAuthData(state);
            stateCopy.isAuth = action.value;
            return stateCopy;
        case SET_USER_INFO:
            stateCopy = makeCopyAuthData(state);
            stateCopy.userInfo.userName = action.userName;
            stateCopy.userInfo.userId = action.userId;
            return stateCopy;
        default:
            return state;
    }
};

export default authReducer;
*/