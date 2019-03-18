import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./Reducers/profilePageReducer";
import conversationsPageReducer from "./Reducers/conversationsPageReducer";
import loginPageReducer from "./Reducers/loginPageReducer";
import authReducer from "./Reducers/AuthReducer";
import thunk from "redux-thunk";
import usersPageReducer from "./Reducers/usersPageReducer";
import { reducer as formReducer } from 'redux-form'

export let guid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

const jointReducer = combineReducers({
    conversationPage: conversationsPageReducer,
    profilePage: profilePageReducer,
    loginPage: loginPageReducer,
    authData: authReducer,
    usersPage: usersPageReducer,
    form: formReducer
});

const store = createStore(jointReducer, applyMiddleware(thunk));

export default store;