import React from 'react';
import style from './loginPage.module.css';
import LoginTitle from "./LoginTitle/LoginTitle";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import LoginButtons from "./LoginButtons/LoginButtons";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {changeCaptcha, statuses} from "../../Redux-BLL/Reducers/loginPageReducer";
import InProgressPage from "../InProgressPage/InProgressPage";
import PropTypes from 'prop-types';

const LoginPage = ({isAuth, status, captchaUrl, changeCaptcha, message}) => {
    if (isAuth) {
        return <Redirect to='/profile'/>
    }

    let loginTitleText =
        [
            {id: 1, text: 'Login'},
            {id: 2, text: 'Registration'}
        ];

    let loginTitleTags = loginTitleText.map((el) => {
        return <LoginTitle className={style.title} key={el.id} text={el.text}/>
    });

    let errorMessageBlock = status === statuses.ERROR && <div className={style.error}>{message}</div>;

    let captchaBlock = captchaUrl && status === statuses.ERROR && <div className={style.captchaBlock}>
        <img className={style.captchaImg} src={captchaUrl} alt="captcha" />
        <input className={style.captchaTextField} type="text" onChange={changeCaptcha}/>
    </div>;

    return (
        <>
            {status === statuses.IN_PROGRESS ?
            <InProgressPage /> :
            <div className={style.wrapper}>
                <div className={style.loginTitleBlock}>
                    {loginTitleTags}
                </div>
                <div className={style.RegistrationFormBlock}>
                    <RegistrationForm/>
                    <LoginButtons/>
                    {
                        errorMessageBlock
                    }
                    {
                        captchaBlock
                    }
                </div>
            </div>}
        </>
    );
};

LoginPage.propTypes = {
    isAuth: PropTypes.bool,
    status: PropTypes.string,
    captchaUrl: PropTypes.string,
    changeCaptcha: PropTypes.func,
    message: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        message: state.loginPage.message,
        status: state.loginPage.status,
        captchaUrl: state.loginPage.captchaUrl
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCaptcha: (text) => {
            dispatch(changeCaptcha(text))
        }
    }
};

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default connectedLoginPage;