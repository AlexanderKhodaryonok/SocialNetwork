import React from 'react';
import style from './TextField.module.css';
import {connect} from "react-redux";
import {onMessageChange} from "../../../../../Redux-BLL/Reducers/conversationsPageReducer";

const TextField = (props) => {
    return (
        <textarea className={style.textField} onChange={props.onMessageChange} value={props.currentWritingMessage.text} />
    );
};

const mapStateToProps = (state) => {
    return {
        currentWritingMessage: state.conversationPage.currentWritingMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(onMessageChange(text))
        }
    }
};

const ConnectedTextField = connect(mapStateToProps, mapDispatchToProps)(TextField);

export default ConnectedTextField;