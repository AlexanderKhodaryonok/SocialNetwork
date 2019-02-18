import {guid} from "../store";
import Interlocutor from "../../Images/Interlocutor.png";

function findConversation(id, stateCopy) {
    let index;
    if (!!id){
        stateCopy.currentConversation = stateCopy.conversations.find((conv, idx) => {
            if (id == conv.id) {
                index = idx;
                return true
            }
        })
    }
    return  index;
}

const CHANGE_CURRENT_MESSAGE = 'NETWORK/CONVERSATIONS/CHANGE_CURRENT_MESSAGE';
const ADD_MESSAGE = 'NETWORK/CONVERSATIONS/ADD_MESSAGE';
const SET_ID = 'NETWORK/CONVERSATIONS/SET_ID';
const GET_CONVERSATION = 'NETWORK/CONVERSATIONS/GET_CONVERSATION'

const conversationsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_MESSAGE:
            return {
                ...state, currentWritingMessage: {
                    text: action.text
                }
            };

        case ADD_MESSAGE:
            let stateCopy = makeCopyConversationsPage(state);
            let newMessage = {
                id: guid(),
                img: 'https://s00.yaplakal.com/pics/pics_original/5/9/2/10925295.jpg',
                name: 'Me',
                text: action.text
            };

            let conversationId = findConversation(action.id, stateCopy);
            stateCopy.conversations[conversationId].messages.push(newMessage);
            stateCopy.currentWritingMessage.text = '';
            return stateCopy;

            /*let conversationId = findConversation(action.id, state);
            return {...state,
                currentWritingMessage: { text: ''},
                ...state.conversations = [
                    ...state.conversations, ...state.conversations[conversationId] = [
                        ...state.conversations[conversationId], ...newMessage
                    ]
                ],
            };*/

        case GET_CONVERSATION:
            stateCopy = makeCopyConversationsPage(state);
            stateCopy.currentConversation = state.conversations.filter(conversation => conversation.id === +action.id)[0];
            return stateCopy;

        case SET_ID:
            stateCopy = makeCopyConversationsPage(state);
            stateCopy.currentConversationId = action.id;
            return {...state,
                currentConversationId: action.id
            };

        default:
            return state;
    }
};

export default conversationsPageReducer;

export const addMessage = (id, text) => ({type: ADD_MESSAGE, id: id, text: text});
export const onMessageChange = (text) => ({type: CHANGE_CURRENT_MESSAGE, text: text.currentTarget.value});
export const setId = (conversationId) => ({type: SET_ID, id: conversationId});
export const getConversation = (id) => ({type: GET_CONVERSATION, id: id});

let initialState = {
    currentConversationId: null,
    currentConversation: null,
    currentWritingMessage: {text: null},
    avatarImage: 'https://s00.yaplakal.com/pics/pics_original/5/9/2/10925295.jpg',
    conversations: [
        {
            id: 1,
            name: 'Kris',
            messages: [
                {
                    id: 11,
                    img: 'https://telegramguides.com/wp-content/uploads/2018/04/pusheen-cat-2-sticker-package-telegram-1.png',
                    name: 'Kris',
                    text: 'mes1'
                },
                {
                    id: 12,
                    img: 'https://s00.yaplakal.com/pics/pics_original/5/9/2/10925295.jpg',
                    name: 'Me',
                    text: 'mes2'
                }
            ],
        },
        {
            id: 2,
            name: 'Vlad',
            messages: [
                {
                    id: 21,
                    img: Interlocutor,
                    name: 'Vlad',
                    text: 'Hi, man'
                },
                {
                    id: 22,
                    img: 'https://s00.yaplakal.com/pics/pics_original/5/9/2/10925295.jpg',
                    name: 'Me',
                    text: 'Hi, Vlad!'
                }
            ],
        },
    ],
};


function makeCopyConversationsPage(state) {
    let stateCopy = {
        currentConversationId: {...state.currentConversationId},
        currentConversation: {...state.currentConversation},
        currentWritingMessage: {...state.currentWritingMessage},
        conversations: state.conversations.map(conversation => {
            return {
                id: conversation.id,
                name: conversation.name,
                messages: conversation.messages.map(message => {
                    return {...message}
                })
            }
        })
    };
    return stateCopy;
}

/*
const conversationsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_MESSAGE:
            debugger
            let stateCopy = makeCopyConversationsPage(state);
            stateCopy.currentWritingMessage.text = action.text;
            return stateCopy;

        case ADD_MESSAGE:
            stateCopy = makeCopyConversationsPage(state);
            let newMessage = {
                id: guid(),
                img: 'https://s00.yaplakal.com/pics/pics_original/5/9/2/10925295.jpg',
                name: 'Me',
                text: action.text
            };

            let conversationId = findConversation(action.id, stateCopy);
            stateCopy.conversations[conversationId].messages.push(newMessage);
            stateCopy.currentWritingMessage.text = '';
            return stateCopy;

        case GET_CONVERSATION:
            stateCopy = makeCopyConversationsPage(state);
            stateCopy.currentConversation = state.conversations.filter(conversation => conversation.id === +action.id)[0];
            return stateCopy;

        case SET_ID:
            stateCopy = makeCopyConversationsPage(state);
            stateCopy.currentConversationId = action.id;
            return stateCopy;

        default:
            return state;
    }
};

export default conversationsPageReducer;
 */