import React, {Component} from 'react';
import style from './userInfo.module.css'

const UserInfo = (props) => {
    return (
        <li className={style.item}>{props.userInformationItem.title} {props.userInformationItem.text}</li>
    );
};

export default UserInfo;