import React, { Component } from 'react';
import style from './loginTitle.module.css';

const LoginTitle = (props) => {

    return (
        <h3 className={style.loginTitle}>{props.text}</h3>
    );
}

export default LoginTitle;