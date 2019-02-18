import React, {Component} from 'react';
import MyNote from "./MyNote/MyNote.js";
import PostingForm from "./PostingForm/PostingForm.js";
import connect from "react-redux/es/connect/connect";
import style from './myNotes.module.css'

const MyNotes = (props) => {

    let myNotesTags = props.myNotes.map ((myNote) => {
        return <MyNote  myNote={myNote}
                        avatarImage={props.avatarImage}
                        key={myNote.id} />
    });

    return (
        <div className={style.postsBlock}>
            <PostingForm />
            <div className={style.noteBlock}>
                {myNotesTags}
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        myNotes: state.profilePage.myNotes,
        avatarImage: state.profilePage.avatarImage
    };
};

let connectedMyNotes = connect(mapStateToProps, null)(MyNotes);

export default connectedMyNotes;