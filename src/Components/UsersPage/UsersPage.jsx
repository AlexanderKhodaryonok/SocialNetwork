import React from 'react';
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import style from "./usersPage.module.css";
import UsersContentContainer from "../Container components/UsersContentContainer";
import {changeCaptcha, statuses} from "../../Redux-BLL/Reducers/loginPageReducer";
import {connect} from "react-redux";
import InProgressPage from "../InProgressPage/InProgressPage";
//если поставить сюда крутилку, то происиходит зацикливание
const UsersPage = (props) => {
    return (
            <>
                <Header/>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <SideBar/>
                        <UsersContentContainer/>
                    </div>
                </div>
            </>
    );
};

const mapStateToProps = (state) => {
    return {
        status: state.usersPage.status
    }
};

const connectedUsersPage = connect(mapStateToProps, null)(UsersPage);

export default connectedUsersPage;

/*
const UsersPage = (props) => {
    return (
        <>{props.status === statuses.IN_PROGRESS ?
            <InProgressPage/> :
            <>
                <Header/>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <SideBar/>
                        <UsersContentContainer/>
                    </div>
                </div>
            </>}
        </>
    );
};
 */