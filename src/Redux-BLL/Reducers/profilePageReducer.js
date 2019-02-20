import {guid} from "../store";
import BackgroundImage from "../../Images/Background.jpg";
import axios from "../axios/axios-instance";
import {statuses} from "./loginPageReducer";

const CHANGE_CURRENT_NOTE = 'NETWORK/PROFILE/CHANGE_CURRENT_NOTE';
const ADD_NOTE = 'NETWORK/PROFILE/ADD_NOTE';
const SET_MY_ID = 'NETWORK/PROFILE/SET_MY_ID';
const CHANGE_USER_STATUS = 'NETWORK/PROFILE/CHANGE_USER_STATUS';
const SET_STATUS = 'NETWORK/PROFILE/SET_STATUS';
const CHANGE_FLAG = 'NETWORK/PROFILE/CHANGE_FLAG';

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_FLAG:
            return {
                ...state,
                flag: !action.bool
            };

        case CHANGE_USER_STATUS:
            return {
                ...state,
                userStatus: action.text
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case CHANGE_CURRENT_NOTE:
            return {
                ...state,
                currentWritingNote: {
                    ...state.currentWritingNote,
                    text: action.text
                }
            };

        case ADD_NOTE:
            let newNote = {
                id: guid(),
                text: action.text
            };
            return {
                ...state,
                myNotes: [newNote, ...state.myNotes],
                currentWritingNote: {
                    ...state.currentWritingNote,
                    text: ''
                }
            };

        case SET_MY_ID:
            return {
                ...state, userId: action.id
            };

        default:
            return state;
    }
};
/*
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_FLAG:
            return {
                ...state,
                flag: !action.bool
            };

        case CHANGE_USER_STATUS:
            return {
                ...state,
                userStatus: action.text
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case CHANGE_CURRENT_NOTE:
            let stateCopy = makeCopyProfilePage(state);
            stateCopy.currentWritingNote.text = action.text;
            return stateCopy;

        case ADD_NOTE:
            stateCopy = makeCopyProfilePage(state);
            let newNote = {
                id: guid(),
                text: action.text
            };
            stateCopy.myNotes = [newNote, ...stateCopy.myNotes];
            stateCopy.currentWritingNote.text = '';
            return stateCopy;

        case SET_MY_ID:
            return {
                ...state, userId: action.id
            };

        default:
            return state;
    }
};

 */
export default profilePageReducer
//actionCreators
export const onPostChange = (text) => ({ type: CHANGE_CURRENT_NOTE, text: text.currentTarget.value });
export const addNote = (newNote) => ({ type: ADD_NOTE, text: newNote.text});
export const changeUserStatus = (text) => ({ type: CHANGE_USER_STATUS, text});
export const changeFlag = (bool) => ({type: CHANGE_FLAG, bool});
export const setMyId = (id) => ({type: SET_MY_ID, id});

export const setStatus = (status) => ({type: SET_STATUS, status});
//thunkCreators
export const setUserStatus = (userStatus) => {
    return (dispatch, getState) => {
        userStatus = getState().profilePage.userStatus;
        dispatch(setStatus(statuses.IN_PROGRESS));
        axios.put ('profile/status', {
            status: userStatus
        }).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(statuses.SUCCESS));
            }
        })
    };
};
export const getUserStatus = (userStatus, userId) => {
    return (dispatch, getState) => {
        userId = getState().authData.userInfo.userId;
        dispatch(setStatus(statuses.IN_PROGRESS));
        axios.get (`profile/status/${userId}`)
            .then(res => {
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(changeUserStatus(res.data));
        })
    };
};
export const getProfile = (userId) => {
    return (dispatch, getState) => {
        userId = getState().profilePage.userId;
        dispatch(setStatus(statuses.IN_PROGRESS));
        axios.get (`profile/${userId}`)
            .then(res => {
            })
    };
};

let initialState = {
    aboutMe: null,
    contacts: {
        email: null,
        facebook: null,
        googlePlus: null,
        icq: null,
        instagram: null,
        skype: null,
        twitter: null,
        vk: null,
        whatsApp: null,
    },
    fullName: null,
    lookingForAJob: false,
    lookingForAJobDescription: null,

    userId: null,
    flag: true,
    status: 'INIT',
    currentWritingUserStatus: null,
    userStatus: null,
    backgroundImage: BackgroundImage,
    currentWritingNote: { text: null },
    avatarImage: 'https://s00.yaplakal.com/pics/pics_original/5/9/2/10925295.jpg',
    myNotes: [
        { id: 1, text: 'Second note' },
        { id: 2, text: 'First note' }
    ],
    userInformationItems: [
        { id: 1, title: 'Birthday:', text: '3-e sentyabrya' },
        { id: 2, title: 'City:', text: 'Moscow' },
        { id: 3, title: 'Education:', text: 'BSUIR' },
        { id: 4, title: 'Website:', text: 'https://it-kama.com' }
    ]
};

function makeCopyProfilePage(state) {

    let stateCopy = {
        ...state,
        myNotes: state.myNotes.map(note => {
            return { ...note }
        }),
        userInformationItems: state.userInformationItems.map(item => {
            return { ...item }
        }),
    };
    return stateCopy;
}

/*
let initialState = {
    userId: null,
    flag: true,
    status: 'INIT',
    currentWritingUserStatus: null,
    userStatus: null,
    userFirstName: 'Name',
    userSecondName: 'Surname',
    backgroundImage: BackgroundImage,
    currentWritingNote: { text: null },
    avatarImage: 'https://s00.yaplakal.com/pics/pics_original/5/9/2/10925295.jpg',
    myNotes: [
        { id: 1, text: 'Second note' },
        { id: 2, text: 'First note' }
    ],
    userInformationItems: [
        { id: 1, title: 'Birthday:', text: '3-e sentyabrya' },
        { id: 2, title: 'City:', text: 'Moscow' },
        { id: 3, title: 'Education:', text: 'BSUIR' },
        { id: 4, title: 'Website:', text: 'https://it-kama.com' }
    ]
};
 */