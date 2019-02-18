import React, {Component} from 'react';
import style from './profileContent.module.css';
import Information from "./Information/Information.js";
import MyNotes from "./MyNotes/MyNotes.js";
import {connect} from "react-redux";

const ProfileContent = (props) => {
    return (
        <div className={style.wrapper}>
            <img className={style.backgroundPicture}
                 src={props.backgroundImage}
                 alt='background'/>
            <Information />
            <MyNotes />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        backgroundImage : state.profilePage.backgroundImage,
    }
};

const connectedProfileContent = connect(mapStateToProps, null)(ProfileContent)

export default connectedProfileContent;