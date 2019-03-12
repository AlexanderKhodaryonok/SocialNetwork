import React from 'react';
import style from './message.module.css';
import PropTypes from 'prop-types';

const Message = ({message}) => {

    return (
        <div className={style.wrapper}>
            <div className={style.info}>
                <img className={style.avatar} src={message.img}  alt={'Avatar'}/>
                {message.name}
            </div>
            <div className={style.message}>
                {message.text}
            </div>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.object
}

export default Message;