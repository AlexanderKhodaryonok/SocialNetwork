import React, {useEffect} from 'react';
import style from './information.module.css';
import connect from "react-redux/es/connect/connect";
import {
    changeFlag,
    changeUserStatus, getInfo, getProfile,
    getUserStatus, setMyId,
    setUserStatus, getFlag, setStatus
} from "../../../../Redux-BLL/Reducers/profilePageReducer";
import {statuses} from "../../../../Redux-BLL/Reducers/loginPageReducer";
import {withRouter} from "react-router";
import {NavLink} from "react-router-dom";

const Information = (props) => {

    /*useEffect(() => {
        props.getInfo(props.match.params.id);
    }, [props.fullName, props.lookingForAJob, props.lookingForAJobDescription, props.aboutMe, props.contacts.email, props.contacts.facebook, props.contacts.googlePlus, props.contacts.icq, props.contacts.instagram, props.contacts.skype, props.contacts.twitter, props.contacts.vk, props.contacts.whatsApp]);*/

    /*useEffect(() => {
        props.getUserStatus();
    }, [props.userStatus]);*/

    let textFieldCssClasses = props.flag ? style.status + ' ' + style.hide : style.status;
    let textCssClasses = props.flag ? style.status : style.status + ' ' + style.hide;

     if (props.status === statuses.INIT && props.userId != null) {
         props.getUserStatus();
     }

    const hideStatusTextField = () => {
        props.changeFlag(props.flag);
        props.setUserStatus();
    };

    if ((props.match.path === '/profile' || props.match.path === '/') && props.userId != null && props.status === statuses.INIT) {
        props.setMyId(props.userId);
        props.getProfile();
    }

    return (
        <>
            <div className={style.wrapper}>
                <img className={style.avatar}
                     src={props.avatarImage}
                     alt='avatar'/>
                <div>
                    <ul className={style.infoList}>
                        <span className={style.name}>{props.fullName}</span>
                        <span className={textCssClasses} onClick={props.changeFlag}>{props.userStatus}</span>
                        <div className={textFieldCssClasses}>
                            <input onChange={props.userStatusOnChange}/>
                            <button onClick={hideStatusTextField}>Save</button>
                        </div>
                        {props.lookingForAJob && <span>lookingForAJob: {props.lookingForAJob}</span>}
                        {props.lookingForAJobDescription && <span>lookingForAJobDescription: {props.lookingForAJobDescription}</span>}
                        {props.aboutMe && <span>aboutMe: {props.aboutMe}</span>}
                        <div className={style.contactsBlock}>
                            {props.contacts.facebook && <div>facebook: {props.contacts.facebook}</div>}
                            {props.contacts.github && <div>github: {props.contacts.github}</div>}
                            {props.contacts.instagram && <div>instagram: {props.contacts.instagram}</div>}
                            {props.contacts.mainLink && <div>mainLink: {props.contacts.mainLink}</div>}
                            {props.contacts.twitter && <div>twitter: {props.contacts.twitter}</div>}
                            {props.contacts.vk && <div>vk: {props.contacts.vk}</div>}
                            {props.contacts.website && <div>website: {props.contacts.website}</div>}
                            {props.contacts.youtube && <div>youtube: {props.contacts.youtube}</div>}
                        </div>
                    </ul>
                </div>
                <NavLink className={style.editButton} to={`/profile/edit`}>edit</NavLink>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        myId: state.authData.userInfo.userId,
        aboutMe: state.profilePage.aboutMe,
        contacts: state.profilePage.contacts,
        lookingForAJob: state.profilePage.lookingForAJob,
        lookingForAJobDescription: state.profilePage.lookingForAJobDescription,
        avatarImage: state.profilePage.avatarImage,
        fullName: state.profilePage.fullName,
        userStatus: state.profilePage.userStatus,
        status: state.authData.status,
        userId: state.authData.userInfo.userId,
        flag: getFlag(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFlag: (bool) => {
            dispatch(changeFlag(bool))
        },
        setUserStatus: () => {
            dispatch(setUserStatus())
        },
        getUserStatus: () => {
            dispatch(getUserStatus())
        },
        userStatusOnChange: (text) => {
            dispatch(changeUserStatus(text.currentTarget.value))
        },
        getProfile: () => {
            dispatch(getProfile())
        },
        setMyId: (id) => {
            dispatch(setMyId(id))
        },
        getInfo: (id) => {
            dispatch(getInfo(id))
        },
        /*setStatus: (status) => {
            debugger
            dispatch(setStatus(status))
        }*/
    }
};

let connectedInformation = connect(mapStateToProps, mapDispatchToProps)(Information);

export default withRouter(connectedInformation);