import React from 'react';
import {NavLink} from "react-router-dom";
import style from './conversations.module.css';
import {connect} from "react-redux";
import {setId} from "../../../../Redux-BLL/Reducers/conversationsPageReducer";
import PropTypes from 'prop-types';

const Conversations = ({conversation, setId}) => {
    return (
            <NavLink onClick = { () => {
                setId(conversation.id);
            } } to={`/conversations/${conversation.id}`} className={style.conversationText} activeClassName={style.active} >{conversation.name}</NavLink>
    );
};

Conversations.ropTypes = {
    setId: PropTypes.func
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