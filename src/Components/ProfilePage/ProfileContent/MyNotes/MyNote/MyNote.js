import React, {Component} from 'react';
import style from './myNote.module.css';

const MyNote = (props) => {
    return (
        <div className={style.wrapper}>
            <img className={style.avatar}
                 src={props.avatarImage}
                 alt="NameSurname"/>
            <p className={style.note}>{props.myNote.text}</p>
        </div>
    );
};

export default MyNote;