import React from 'react';
import style from './NewsPage.module.css';
import SideBar from '../SideBar/SideBar.js';
import ConnectedHeader from "../Container components/HeaderContainer";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const NewsPage = () => {

    return (
        <>
            <ConnectedHeader/>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <SideBar/>
                    Coming soon...
                </div>
            </div>
        </>
    );
};

export default NewsPage;