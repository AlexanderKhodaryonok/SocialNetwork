import axios from '../axios/axios-instance';
import React from "react";
import store from "../store";

//selectors
export const isAuthSelector = (state) => state.authData.isAuth;

const initialState = {
    status: 'INIT',
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
            let newState = {
                ...state, userInfo: {
                    ...state.userInfo,
                    userName: action.userName,
                    userId: action.userId
                }
            };
            return newState
        default:
            return state;
    }
};

export default authReducer;

export const setIsAuth = (bool) => ({type: SET_IS_AUTH, value: bool});
export const setUserInfo = (userId, userName,) => ({type: SET_USER_INFO, userId, userName});

export const logout = () => {
    return async (dispatch) => {
        try {
            await axios.post('auth/logout');
            dispatch(setIsAuth(false));
            dispatch(setUserInfo(null, null));
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const me = () => {
    return async (dispatch) => {
        try {
            const success = await axios.get('auth/me');
            if (success.data.resultCode === 0) {
                dispatch(setIsAuth(true));
                dispatch(setUserInfo(success.data.data.id, success.data.data.login));
            } else
            if (success.data.resultCode === 1) {
                alert ('insert correct login/password')
            }
        } catch (error) {
            console.log(error.message);
        }
    };
};
