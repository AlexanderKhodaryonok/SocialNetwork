import React from 'react';
import style from './postingForm.module.css';
import Button from './Button/Button.js'
import TextField from './TextField/TextField.js'
import {connect} from "react-redux";

const PostingForm = (props) => {
    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>My notes</h3>
            <TextField />
            <Button />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        myNotes: state.profilePage.myNotes,
        currentWritingNote: state.profilePage.currentWritingNote
    }
};

const connectedPostingForm = connect(mapStateToProps, null)(PostingForm);

export default connectedPostingForm;