import {me, setIsAuth} from "./AuthReducer";
import axios from '../axios/axios-instance'

const CHANGE_LOGIN = 'NETWORK/LOGIN/CHANGE_CURRENT_LOGIN';
const CHANGE_PASSWORD = 'NETWORK/LOGIN/CHANGE_CURRENT_PASSWORD';
const REMEMBER_ME = 'NETWORK/LOGIN/REMEMBER_ME';
const SET_STATUS = 'NETWORK/LOGIN/SET_STATUS';
const SET_MESSAGE = 'NETWORK/LOGIN/SET_MESSAGE';
const SET_CAPTCHA = 'NETWORK/LOGIN/SET_CAPTCHA';
const CHANGE_CAPTCHA = 'NETWORK/LOGIN/CHANGE_CAPTCHA';

export const statuses = {
    INIT: 'INIT',
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    IN_PROGRESS: 'IN_PROGRESS',
    CAPTCHA_REQIURED: 'CAPTCHA_REQIURED',
    SUCCESS: 'SUCCESS'
};

const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case REMEMBER_ME:
            return {
                ...state,
                rememberMe: action.rememberMe
            };
        case CHANGE_LOGIN:
            return {
                ...state,
                login: {
                    ...state.login,
                    text: action.text
                }
            };
        case CHANGE_PASSWORD:
            return {
                ...state, password: {
                    ...state.password,
                    text: action.text
                }
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_MESSAGE:
            return {
                ...state,
                massage: action.text
            };
        case CHANGE_CAPTCHA:
            return {
                ...state,
                captchaText: action.text
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.url
            };
        default:
            return state;
    }
};
export default loginPageReducer;
//actionCreators
export const onLoginChange = (text) => ({ type: CHANGE_LOGIN, text: text.currentTarget.value });
export const onPasswordChange = (text) => ({ type: CHANGE_PASSWORD, text: text.currentTarget.value });
export const setStatus = (status) => ({type: SET_STATUS, status: status});
export const setRememberMe = (bool) => ({type: REMEMBER_ME, rememberMe: bool});
export const setMessage = (message) => ({type: SET_MESSAGE, text: message});
export const setCaptchaUrl = (url) => ({type: SET_CAPTCHA, url});
export const changeCaptcha = (text) => ({type: CHANGE_CAPTCHA, text: text.currentTarget.value});
//thunkCreators
//сделать вывод в окно при ошибке в логине/пароле
export const loginClick= (login, password, rememberMe, captcha) => {
    return async (dispatch) => {
        try {
            dispatch(setStatus(statuses.IN_PROGRESS));
            const success = await axios.post ('auth/login', {
                email: login,
                password: password,
                rememberMe: rememberMe,
                captcha: captcha
            });
            if (success.data.resultCode === 0) {
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(setIsAuth(true));
                dispatch(me());
            } else if (success.data.resultCode === 10) {
            const captcha = await axios.get ('security/get-captcha-url');
                    dispatch(setStatus(statuses.ERROR));
                    dispatch(setCaptchaUrl(captcha.data.url));
            }}
        catch (error) {
            alert(error.message);
            dispatch(setStatus(statuses.ERROR));
            dispatch(setMessage(error.data.messages[0]));
        }
    }
};

let initialState = {
    captchaUrl: null,
    captchaText: null,
    message: '',
    rememberMe: false,
    status: statuses.INIT,
    password: { id: 1, text: null },
    login: { id: 2, text: null }
};