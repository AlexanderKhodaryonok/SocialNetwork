import axios from "../axios/axios-instance";
import {statuses} from "./loginPageReducer";

let initialState = {
    status: statuses.INIT,
    users: []
};

const SET_USERS = 'NETWORK/FRIENDS/GET_USERS';
const SET_STATUS = 'NETWORK/FRIENDS/SET_STATUS';
const CLEAR_USERS = 'NETWORK/FRIENDS/CLEAR_USERS';

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };

        case CLEAR_USERS:
            return {
                ...state,
                users: []
            };

        default:
            return state;
    }
};

export default usersPageReducer;

export const setStatus = (status) => ({type: SET_STATUS, status: status});
export const setUsers = (users) => ({type: SET_USERS, users});
export const clearUsers = () => ({type: CLEAR_USERS});

export const getUsers = (page , count = 5) => (dispatch) => {
    dispatch(setStatus(statuses.IN_PROGRESS));
    axios.get(`users?page=${page}&count=${count}`).then (res =>{
        dispatch(setStatus(statuses.SUCCESS));
        dispatch(setUsers(res.data.items));

    });
};