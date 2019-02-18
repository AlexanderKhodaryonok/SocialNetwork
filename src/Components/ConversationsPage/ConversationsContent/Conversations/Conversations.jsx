import React from 'react';
import {NavLink} from "react-router-dom";
import style from './conversations.module.css';
import {connect} from "react-redux";
import {setId} from "../../../../Redux-BLL/Reducers/conversationsPageReducer";

const Conversations = (props) => {
    return (
            <NavLink onClick = { () => {
                props.setId(props.conversation.id);
            } } to={`/conversations/${props.conversation.id}`} className={style.conversationText} activeClassName={style.active} >{props.conversation.name}</NavLink>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setId: (conversationId) => {
            dispatch(setId(conversationId))
        }
    }
};

const connectedConversations = connect(null, mapDispatchToProps)(Conversations);

export default connectedConversations;
/*
import React from 'react';
import {NavLink} from "react-router-dom";
import style from './conversations.module.css';
import {connect} from "react-redux";
import {setId} from "../../../../Redux-BLL/Reducers/conversationsPageReducer";

const Conversations = (props) => {
    return (
        <div className={style.conversation + ' ' + props.cssClasses } onClick = { () => {
            props.setId(props.conversation.id);
            } } >
            <NavLink to={`/conversations/${props.conversation.id}`} className={style.conversationText} activeClassName={style.active} >{props.conversation.name}</NavLink>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setId: (conversationId) => {
            dispatch(setId(conversationId))
        }
    }
};

const connectedConversations = connect(null, mapDispatchToProps)(Conversations);

export default connectedConversations;
 */