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
const SET_ABOUT_ME = 'NETWORK/PROFILE/SET_ABOUT_ME';
const SET_FULL_NAME = 'NETWORK/PROFILE/SET_FULL_NAME';
const SET_LOOKING_FOR_A_JOB = 'NETWORK/PROFILE/LOOKING_FOR_A_JOB';
const SET_LOOKING_FOR_A_JOB_DESCRIPTION = 'NETWORK/PROFILE/SET_LOOKING_FOR_A_JOB_DESCRIPTION';
const SET_CONTACTS_INFO = 'NETWORK/PROFILE/SET_CONTACTS_INFO';

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
            let newState = {
                ...state,
                status: action.status
            };
            return newState;

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

        case SET_ABOUT_ME:
            return {
                ...state, aboutMe: action.text
            };

        case SET_FULL_NAME:
            return {
                ...state, fullName: action.text
            };

        case SET_LOOKING_FOR_A_JOB:
            return {
                ...state, lookingForAJob: action.text
            };

        case SET_LOOKING_FOR_A_JOB_DESCRIPTION:
            return {
                ...state, lookingForAJobDescription: action.text
            };

        case SET_CONTACTS_INFO:
            return {
                ...state, contacts: action.contacts
            };

        default:
            return state;
    }
};

export default profilePageReducer
//actionCreators
export const onPostChange = (text) => ({type: CHANGE_CURRENT_NOTE, text: text.currentTarget.value});
export const addNote = (newNote) => ({type: ADD_NOTE, text: newNote.text});
export const changeUserStatus = (text) => ({type: CHANGE_USER_STATUS, text});
export const changeFlag = (bool) => ({type: CHANGE_FLAG, bool});
export const setMyId = (id) => ({type: SET_MY_ID, id});
export const setAboutMe = (text) => ({type: SET_ABOUT_ME, text});
export const setFullName = (text) => ({type: SET_FULL_NAME, text});
export const setLookingForAJob = (text) => ({type: SET_LOOKING_FOR_A_JOB, text});
export const setLookingForAJobDescription = (text) => ({type: SET_LOOKING_FOR_A_JOB_DESCRIPTION, text});
export const setContactsInfo = (contacts) => ({type: SET_CONTACTS_INFO, contacts});
export const setStatus = (status) => ({type: SET_STATUS, status});
//thunkCreators
export const setInfo = (values) => {
    debugger
    return async (dispatch) => {
        try {
            dispatch(setStatus(statuses.IN_PROGRESS));
            await axios.put(`profile`, {
                    'aboutMe': values.aboutMe,
                    'contacts': {
                        'facebook': values.facebook,
                        'github': values.github,
                        'instagram': values.instagram,
                        'mainLink': values.mainLink,
                        'twitter': values.twitter,
                        'vk': values.vk,
                        'website': values.website,
                        'youtube': values.youtube,
                    },
                    "lookingForAJob": values.lookingForAJob,
                    "lookingForAJobDescription": values.lookingForAJobDescription,
                    "fullName": values.fullName,
                    "photos": {
                        "small": null,
                        'large': null,
                    }
                }
            );
            dispatch(setStatus(statuses.SUCCESS));
        } catch (error) {
            alert(error.message)
        }
    };
};

export const getInfo = (userId) => {
    debugger
    return async (dispatch, getState) => {
        let id = userId ? userId : getState().authData.userInfo.userId;
        try {
            dispatch(setStatus(statuses.IN_PROGRESS));
            const success = await axios.get(`profile/${id}`);
            debugger
            dispatch(setAboutMe(success.data.aboutMe));
            dispatch(setFullName(success.data.fullName));
            dispatch(setLookingForAJob(success.data.lookingForAJob));
            dispatch(setLookingForAJobDescription(success.data.lookingForAJobDescription));
            dispatch(setContactsInfo(success.data.contacts));
            dispatch(setStatus(statuses.SUCCESS));
        }
        catch (error) {
            return console.log('getInfo '+error.message)
        }
    }
};

export const setUserStatus = (userStatus) => {
    return async (dispatch, getState) => {
        try {
            userStatus = getState().profilePage.userStatus;
            dispatch(setStatus(statuses.IN_PROGRESS));
            await axios.put('profile/status', {
                    status: userStatus
                }
            );
            dispatch(setStatus(statuses.SUCCESS));
        } catch (error) {
            alert(error.message);
        }
    };
};

export const getUserStatus = () => {
    return async (dispatch, getState) => {
        let userId = getState().authData.userInfo.userId;
        console.log(userId);
        try {
            dispatch(setStatus(statuses.IN_PROGRESS));
            const success = await axios.get(`profile/status/${userId}`);
            dispatch(changeUserStatus(success.data));
            dispatch(setStatus(statuses.SUCCESS));
        } catch (error) {
            alert('getUserStatus ' + error.message);
        }
    };
};

export const getProfile = () => {
    return async (dispatch, getState) => {
        try {
            let userId = getState().profilePage.userId;
            dispatch(setStatus(statuses.IN_PROGRESS));
            await axios.get(`profile/${userId}`)
        } catch (error) {
            alert(error.message);
        }
    };
};

//selectors
export const getFlag = (state) => state.profilePage.flag;

let initialState = {
    aboutMe: null,
    contacts: {
        'facebook': null,
        'github': null,
        'instagram': null,
        'mainLink': null,
        'twitter': null,
        'vk': null,
        'website': null,
        'youtube': null,
    },
    fullName: null,
    lookingForAJob: false,
    lookingForAJobDescription: null,
    photos: {
        large: null,
        small: null
    },
    userId: null,
    flag: true,
    status: 'INIT',
    currentWritingUserStatus: null,
    userStatus: null,
    backgroundImage: BackgroundImage,
    currentWritingNote: {text: null},
    avatarImage: 'https://s00.yaplakal.com/pics/pics_original/5/9/2/10925295.jpg',
    myNotes: [
        {id: 1, text: 'Second note'},
        {id: 2, text: 'First note'}
    ],
};