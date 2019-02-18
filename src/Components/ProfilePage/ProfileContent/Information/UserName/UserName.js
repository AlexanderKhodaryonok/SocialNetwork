import React from 'react';
import style from './userName.module.css';
//не используется
const UserName = (props) => {

    let userFirstName = props.userNameItem.userFirstName;
    let userSecondName = props.userNameItem.userSecondName;

    return (
        <span className={style.name}>{userFirstName} {userSecondName}</span>
    );
};

export default UserName;