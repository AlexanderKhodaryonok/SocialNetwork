import React from 'react';
import style from './loginPage.module.css';
import LoginTitle from "./LoginTitle/LoginTitle";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import LoginButtons from "./LoginButtons/LoginButtons";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {changeCaptcha, statuses} from "../../Redux-BLL/Reducers/loginPageReducer";
import InProgressPage from "../InProgressPage/InProgressPage";

const LoginPage = (props) => {
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }

    let loginTitleText =
        [
            {id: 1, text: 'Login'},
            {id: 2, text: 'Registration'}
        ];

    let loginTitleTags = loginTitleText.map((el) => {
        return <LoginTitle key={el.id} text={el.text}/>
    });

    let errorMessageBlock = props.status === statuses.ERROR && <div className={style.error}>{props.message}</div>;

    let captchaBlock = props.captchaUrl && props.status === statuses.ERROR && <div className={style.captchaBlock}>
        <img className={style.captchaImg} src={props.captchaUrl} alt="captcha"
        />
        <input className={style.captchaTextField} type="text" onChange={props.changeCaptcha}/>
    </div>;

    return (
        <>
            {props.status === statuses.IN_PROGRESS ?
            <InProgressPage /> :
            <div className={style.wrapper}>
                alexanderkhodaryonok@gmail.com
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