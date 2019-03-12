import React from 'react';
import style from './profilePage.module.css';
import SideBar from '../SideBar/SideBar.js';
import ProfileContent from "./ProfileContent/ProfileContent.js";
import ConnectedHeader from "../Container components/HeaderContainer";

const ProfilePage = () => {
    return (
        <>
            <ConnectedHeader/>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <SideBar/>
                    <ProfileContent/>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;