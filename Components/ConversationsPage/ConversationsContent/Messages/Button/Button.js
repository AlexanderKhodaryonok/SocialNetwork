import React from 'react';
import style from './Button.module.css'
import {connect} from "react-redux";
import {addMessage} from "../../../../../Redux-BLL/Reducers/conversationsPageReducer";

const Button = (props) => {

    let onAddMessageButtonClick = () => {
        props.addMessage(props.match.params.id, props.currentWritingMessage.text)
    };

    return (
        <div>
            <button className={style.button} onClick={onAddMessageButtonClick}>Send Message</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentWritingMessage: state.conversationPage.currentWritingMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (id, text) => {
            dispatch(addMessage(id, text))
        }
    }
};

const connectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default connectedButton;