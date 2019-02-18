import style from "./Messages.module.css";
import React from "react";
import TextField from "./TextField/TextField";
import Button from "./Button/Button";
import Message from "./Message/Message";
import {connect} from "react-redux";
import {getConversation} from "../../../../Redux-BLL/Reducers/conversationsPageReducer";


const Messages = (props) => {
    let messagesTags = props.currentConversation.messages.map((message) => {
        return <Message message={message}/>
    });

    return (
        <div className={style.wrapper}>
            <div className={style.messagesBlock}>
                {messagesTags}
            </div>
            <div className={style.postingBlock}>
                <TextField/>
                <Button match={props.match}/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        currentConversation: state.conversationPage.currentConversation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getConversation: (id) => {
            dispatch(getConversation(id))
        }
    }
};

const connectedMessages = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default connectedMessages;