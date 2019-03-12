import React from 'react';
import SideBar from "../SideBar/SideBar";
import style from "./usersPage.module.css";
import UsersContentContainer from "../Container components/UsersContentContainer";
import ConnectedHeader from "../Container components/HeaderContainer";

const UsersPage = () => {
    return (
            <>
                <ConnectedHeader/>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <SideBar/>
                        <UsersContentContainer/>
                    </div>
                </div>
            </>
    );
};


export default UsersPage;