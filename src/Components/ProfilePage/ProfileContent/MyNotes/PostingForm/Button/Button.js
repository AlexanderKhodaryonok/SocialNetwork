import React from 'react';
import style from './Button.module.css'
import connect from "react-redux/es/connect/connect";
import {onPostChange} from "../../../../../../Redux-BLL/store";
import {addNote} from "../../../../../../Redux-BLL/Reducers/profilePageReducer";

const Button = (props) => {

    const onAddNoteButtonClick = () => props.addNote(props.currentWritingNote);

    return (
        <button className={style.button} onClick={onAddNoteButtonClick}>Post note</button>
    );
};

const mapStateToProps = (state) => {
    return {
        currentWritingNote: state.profilePage.currentWritingNote
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (newNote) => {
            dispatch(addNote(newNote))
        }
    }
};

const connectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default connectedButton;

