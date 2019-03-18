import React, {Component} from 'react';
import style from './profileContent.module.css';
import MyNotes from "./MyNotes/MyNotes.js";
import {connect} from "react-redux";
import InformationContainer from "../../Container components/InformationContainer";

const ProfileContent = (props) => {
    return (
        <div className={style.wrapper}>
            <img className={style.backgroundPicture}
                 src={props.backgroundImage}
                 alt='background'/>
            <InformationContainer />
            <MyNotes />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        backgroundImage : state.profilePage.backgroundImage,
    }
};

export default connect(mapStateToProps, null)(ProfileContent)