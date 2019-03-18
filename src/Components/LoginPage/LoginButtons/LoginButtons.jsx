import React, {Component} from 'react';
import style from './loginButtons.module.css';
import {connect} from "react-redux";
import {setRememberMe, statuses, loginClick} from "../../../Redux-BLL/Reducers/loginPageReducer";

const LoginButtons = (props) => {

    let lettering;
    let cssClasses;

    props.status === statuses.IN_PROGRESS ? lettering = 'Wait' : lettering = 'Login';
    props.status === statuses.IN_PROGRESS ? cssClasses = style.loginButton+' '+ style.transform : cssClasses = style.loginButton;

    return (
        <div className={style.wrapper}>
            <div>
                <input name = 'q' className={style.loginRemember} type="checkbox" onClick={(e) => {
                    props.setRememberMe(e.currentTarget.checked)
                }}/>
                <label htmlFor='q'> Remember Me</label>
            </div>
            <button disabled={props.status === statuses.IN_PROGRESS} className={cssClasses} onClick={(e) => {
                props.onLoginButtonClick(
                    props.login,
                    props.password,
                    props.rememberMe,
                    props.captcha,
                    e.currentTarget.value
                )
            }}>
                {lettering}
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        status: state.loginPage.status,
        isAuth: state.authData.isAuth,
        message: state.authData.message,
        captcha: state.loginPage.captchaText,
        login: state.loginPage.login.text,
        password: state.loginPage.password.text,
        rememberMe: state.loginPage.rememberMe
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRememberMe: (bool) => {
            dispatch(setRememberMe(bool))
        },
        onLoginButtonClick: (login, password, rememberMe, captcha) => {
            dispatch(loginClick(login, password, rememberMe, captcha))
        }
    }
};

const connectedLoginButtons = connect(mapStateToProps, mapDispatchToProps)(LoginButtons);

export default connectedLoginButtons;