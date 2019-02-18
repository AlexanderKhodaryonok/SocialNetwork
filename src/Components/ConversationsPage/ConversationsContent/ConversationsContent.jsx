import React from 'react';
import {withRouter} from "react-router-dom";
import style from './conversationsContent.module.css';
import Conversations from './Conversations/Conversations';
import Messages from './Messages/Messages';
import {connect} from "react-redux";
import {getConversation} from "../../../Redux-BLL/Reducers/conversationsPageReducer";

const ConversationsContent = (props) => {
    //синхронизация url & id даилога в store
    let outOfSyncState = (!props.currentConversation && !!+props.match.params.id) ||//currentConversation = null, id from url != null
        (!!props.currentConversation && !!+props.match.params.id && +props.match.params.id !== props.currentConversation.id); //

    if (outOfSyncState) {
        props.getConversation(props.match.params.id);
        return null;
    }

    let conversationListTags = props.conversations.map((conversation) => {
        let isConversationSelected = props.currentConversationId === conversation.id;
        //let cssClasses = isConversationSelected ? style.selected : '';
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
                    props.match.params.id !== undefined ?
                        <div className={style.messagesList}>
                            <Messages match={props.match}/>
                        </div> : <div className={style.noMessages}> <div>Choose Conversation</div>  </div>
                }
            </div>
        </div>
    );
};

let HOCConversationContent = withRouter(ConversationsContent);

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