import React from 'react';
import style from './profilePage.module.css';
import Header from '../Header/Header.js';
import SideBar from '../SideBar/SideBar.js';
import ProfileContent from "./ProfileContent/ProfileContent.js";

const ProfilePage = () => {
    return (
        <>
            <Header/>
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