import React from 'react';
import style from './conversationPage.module.css';
import SideBar from '../SideBar/SideBar.js';
import ConversationsContent from "./ConversationsContent/ConversationsContent";
import ConnectedHeader from "../Container components/HeaderContainer";

const ConversationsPage = () => {
    return (
        <>
            <ConnectedHeader />
            <div className={style.wrapper}>
                <div className={style.content}>
                    <SideBar />
                    <ConversationsContent />
                </div>
            </div>
        </>
    );
};

export default ConversationsPage;