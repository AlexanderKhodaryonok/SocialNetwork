import {guid} from "../store";
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
    let stateCopy = makeCopyLoginPage(state);
    switch (action.type) {
        case REMEMBER_ME:
            stateCopy.rememberMe = action.rememberMe;
            return stateCopy;
        case CHANGE_LOGIN:
            stateCopy.login.text = action.text;
            return stateCopy;
        case CHANGE_PASSWORD:
            stateCopy.password.text = action.text;
            return stateCopy;
        case SET_STATUS:
            stateCopy.status = action.status;
            return stateCopy;
        case SET_MESSAGE:
            stateCopy.message = action.text;
            return stateCopy;
        case CHANGE_CAPTCHA:
            stateCopy.captchaText = action.text;
            return stateCopy;
        case SET_CAPTCHA:
            stateCopy.captchaUrl = action.url;
            return stateCopy;
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
export const loginClick= (login, password, rememberMe, captcha) => {
    return (dispatch) => {
        dispatch(setStatus(statuses.IN_PROGRESS));
        axios.post ('auth/login', {
            email: login,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha
        }).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(setIsAuth(true));
                dispatch(me())
            } else if (res.data.resultCode === 10) {
                axios.get ('security/get-captcha-url')
                    .then(res => {
                        dispatch(setStatus(statuses.ERROR));
                        dispatch(setCaptchaUrl(res.data.url));
                    })
            }
            else {
                dispatch(setStatus(statuses.ERROR));
                dispatch(setMessage(res.data.messages[0]));
            }
        })
    };
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

function makeCopyLoginPage(state) {
    let stateCopy = {
        ...state,
        password: {...state.password},
        login: {...state.login}
    };
    return stateCopy;
}