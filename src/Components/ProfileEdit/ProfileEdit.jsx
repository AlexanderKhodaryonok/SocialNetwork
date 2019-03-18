import React from 'react';
import ProfileEditContacts from './ProfileEditComponents/ProfileEditContacts';
import ConnectedHeader from "../Container components/HeaderContainer";
import SideBar from '../SideBar/SideBar.js';
import {setInfo} from "../../Redux-BLL/Reducers/profilePageReducer";
import {connect} from "react-redux";
import style from './ProfileEdit.module.css';

const ProfileEdit = ({aboutMe, userInformationItems, contacts, lookingForAJob, lookingForAJobDescription, fullName, email, facebook, googlePlus, icq, instagram, skype, twitter, vk, whatsApp, setInfo, github, mainLink, website, youtube}) => {
    debugger

    const submit = values => {
        setInfo(values);
      };

	return (
		<>
		<ConnectedHeader/>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <SideBar/>
                    <ProfileEditContacts initialValues={{aboutMe, lookingForAJob, lookingForAJobDescription, fullName, facebook, github, instagram, mainLink, twitter, vk, website, youtube}} onSubmit={submit} />
                </div>
            </div>
			
		</>
	);
};

const mapStateToProps = (state) => {
    return {
        aboutMe: state.profilePage.aboutMe,
        lookingForAJob: state.profilePage.lookingForAJob,
        lookingForAJobDescription: state.profilePage.lookingForAJobDescription,
        fullName: state.profilePage.fullName,
        status: state.profilePage.status,
        facebook: state.profilePage.contacts.facebook,
        github: state.profilePage.contacts.github,
        instagram: state.profilePage.contacts.instagram,
        mainLink: state.profilePage.contacts.mainLink,
        twitter: state.profilePage.contacts.twitter,
        vk: state.profilePage.contacts.vk,
        website: state.profilePage.contacts.website,
        youtube: state.profilePage.contacts.youtube,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setInfo: (values) => {
            dispatch (setInfo(values));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);