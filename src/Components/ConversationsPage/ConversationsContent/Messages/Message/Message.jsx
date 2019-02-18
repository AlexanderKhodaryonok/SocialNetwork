import React from 'react';
import style from './message.module.css';

const Message = (props) => {

    return (
        <div className={style.wrapper}>
            <div className={style.info}>
                <img className={style.avatar} src={props.message.img}  alt={'Avatar'}/>
                {props.message.name}
            </div>
            <div className={style.message}>
                {props.message.text}
            </div>
        </div>
    );
};

export default Message;