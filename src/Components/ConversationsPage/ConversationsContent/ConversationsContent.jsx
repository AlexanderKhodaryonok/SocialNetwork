import React from 'react';
import {withRouter} from "react-router-dom";
import style from './conversationsContent.module.css';
import Conversations from './Conversations/Conversations';
import Messages from './Messages/Messages';
import {connect} from "react-redux";
import {getConversation} from "../../../Redux-BLL/Reducers/conversationsPageReducer";
import PropTypes from 'prop-types';
//const HOCConversationsContent = () => {
const ConversationsContent = ({conversations, currentConversationId, currentConversation, getConversation, match}) => {
    //синхронизация url & id даилога в store
    let outOfSyncState = (!currentConversation && !!+match.params.id) ||//currentConversation = null, id from url != null
        (!!currentConversation && !!+match.params.id && +match.params.id !== currentConversation.id); //

    if (outOfSyncState) {
        getConversation(match.params.id);
        return null;
    }

    let conversationListTags = conversations.map((conversation) => {
        return <Conversations key={conversation.id}
                              cssClasses={'cssClasses'}
                              conversation={conversation}/>
    });

    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Conversations</h3>
            <div className={style.content}>
                <div>
                <div className={style.conversationsList}>
                    {conversationListTags}
                </div>
                </div>
                {   //если в url есть id, то показываю диалог, если нет, то уведомление о выборе диалога
                    match.params.id !== undefined ?
                        <div className={style.messagesList}>
                            <Messages match={match} />
                        </div> : <div className={style.noMessages}> <div>Choose Conversation</div>  </div>
                }
            </div>
        </div>
    );
};

let HOCConversationContent = withRouter(ConversationsContent);

ConversationsContent.propTypes = {
    conversations: PropTypes.array,
    currentConversationId: PropTypes.object,
    currentConversation: PropTypes.number,
    getConversation: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        conversations: state.conversationPage.conversations,
        currentConversationId: state.conversationPage.currentConversationId,
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

const connectedHOCConversationContent = connect(mapStateToProps, mapDispatchToProps)(HOCConversationContent);

export default withRouter(connectedHOCConversationContent);