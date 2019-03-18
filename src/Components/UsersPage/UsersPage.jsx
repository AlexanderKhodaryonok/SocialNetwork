import React from 'react';
import SideBar from "../SideBar/SideBar";
import style from "./usersPage.module.css";
import UsersContentHook from "../Container components/UsersContentHook";

import ConnectedHeader from "../Container components/HeaderContainer";
import UsersContentContainer from "../Container components/UsersContentContainer";

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