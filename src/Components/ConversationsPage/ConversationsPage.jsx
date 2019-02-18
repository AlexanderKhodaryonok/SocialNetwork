import React from 'react';
import style from './conversationPage.module.css';
import Header from '../Header/Header.js';
import SideBar from '../SideBar/SideBar.js';
import ConversationsContent from "./ConversationsContent/ConversationsContent";


const ConversationsPage = () => {
    return (
        <>
            <Header/>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <SideBar/>
                    <ConversationsContent/>
                </div>
            </div>
        </>
    );
};

export default ConversationsPage;