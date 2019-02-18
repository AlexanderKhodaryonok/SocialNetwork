import React from 'react';
import style from './TextField.module.css';
import connect from "react-redux/es/connect/connect";
import {onPostChange} from "../../../../../../Redux-BLL/Reducers/profilePageReducer";

const TextField = (props) => {

    return (
        <textarea className={style.textField} onChange={props.onPostChange} value={props.currentWritingNote.text} />
    );
};

const mapStateToProps = (state) => {
    return {
        currentWritingNote: state.profilePage.currentWritingNote
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(onPostChange(text))
        },
    }
};

const connectedTextField = connect(mapStateToProps, mapDispatchToProps)(TextField);

export default connectedTextField;