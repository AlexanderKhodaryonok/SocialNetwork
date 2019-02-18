import React from 'react';
import style from './information.module.css';
import UserInfo from "./UserInfo/UserInfo.js";
import connect from "react-redux/es/connect/connect";
import {
    changeFlag,
    changeUserStatus, getProfile,
    getUserStatus, setMyId,
    setUserStatus
} from "../../../../Redux-BLL/Reducers/profilePageReducer";
import {statuses} from "../../../../Redux-BLL/Reducers/loginPageReducer";
import {withRouter} from "react-router";

const Information = (props) =>{

    let textFieldCssClasses = props.flag ? style.status+' '+ style.hide : style.status;
    let textCssClasses = props.flag ? style.status : style.status+' '+ style.hide;

    if (props.status === statuses.INIT && props.userId != null) {
        props.getUserStatus()
    }

    let userInformationItemTags = props.userInformationItems.map( (userInformationItem) => {
        return <UserInfo key={userInformationItem.id} userInformationItem={userInformationItem} />
    });

    const hideStatusTextField = () => {
        props.changeFlag(props.flag);
        props.setUserStatus();
    };

    if ((props.match.path === '/profile' || props.match.path === '/') && props.userId != null && props.status === statuses.INIT) {
        props.setMyId(props.userId);
        props.getProfile();
    }

    return (
        <div className={style.wrapper}>
            <img className={style.avatar}
                 src={props.avatarImage}
                 alt='avatar'/>
            <div>
                <ul className={style.infoList}>
                    <span className={style.name}>{props.fullName}</span>
                    <span className={textCssClasses} onClick={props.changeFlag} >{props.userStatus}</span>
                    <div className={textFieldCssClasses} >
                        <input onChange={props.userStatusOnChange} />
                        <button onClick={hideStatusTextField} >Save</button>
                    </div>
                    {
                        userInformationItemTags
                    }
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userInformationItems: state.profilePage.userInformationItems,
        avatarImage: state.profilePage.avatarImage,
        fullName: state.profilePage.fullName,
        userStatus: state.profilePage.userStatus,
        status: state.profilePage.status,
        userId: state.authData.userInfo.userId,
        flag: state.profilePage.flag
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFlag: (bool) => {
            dispatch (changeFlag(bool))
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
        }
    }
};

let connectedInformation = connect(mapStateToProps, mapDispatchToProps)(Information);

export default withRouter(connectedInformation);

/*
import React from 'react';
import style from './information.module.css';
import UserInfo from "./UserInfo/UserInfo.js";
import {
    changeFlag,
    changeUserStatus, getProfile,
    getUserStatus, setMyId,
    setUserStatus
} from "../../../../Redux-BLL/Reducers/profilePageReducer";
import {statuses} from "../../../../Redux-BLL/Reducers/loginPageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const Information = (props) =>{
    if (props.match.path === '/profile' || props.match.path === '/') {
        props.setMyId(props.userId);
        //props.getProfile();
    }

    let textFieldCssClasses = props.flag ? style.status+' '+ style.hide : style.status;
    let textCssClasses = props.flag ? style.status : style.status+' '+ style.hide;

    if (props.status === statuses.INIT && props.userId != null) {
        props.getUserStatus();
        props.getProfile();
    }

    let userInformationItemTags = props.userInformationItems.map( (userInformationItem) => {
        return <UserInfo key={userInformationItem.id} userInformationItem={userInformationItem} />
    });

    const hideStatusTextField = () => {
        props.changeFlag(props.flag);
        props.setUserStatus();
    };

    return (
        <div className={style.wrapper}>
            <img className={style.avatar}
                 src={props.avatarImage}
                 alt='avatar'/>
            <div>
                <ul className={style.infoList}>
                    <span className={style.name}>{props.userFirstName} {props.userSecondName}</span>
                    <span className={textCssClasses} onClick={props.changeFlag} >{props.userStatus}</span>
                    <div className={textFieldCssClasses} >
                        <input onChange={props.userStatusOnChange} />
                        <button onClick={hideStatusTextField} >Save</button>
                    </div>
                    {
                        userInformationItemTags
                    }
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userInformationItems: state.profilePage.userInformationItems,
        avatarImage: state.profilePage.avatarImage,
        userFirstName: state.profilePage.userFirstName,
        userSecondName: state.profilePage.userSecondName,
        userStatus: state.profilePage.userStatus,
        status: state.profilePage.status,
        userId: state.authData.userInfo.userId,
        flag: state.profilePage.flag
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFlag: (bool) => {
            dispatch (changeFlag(bool))
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
        }
    }
};

let connectedInformation = connect(mapStateToProps, mapDispatchToProps)(Information);

export default withRouter(connectedInformation);
 */