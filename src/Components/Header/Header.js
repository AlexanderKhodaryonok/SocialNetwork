import React from 'react';
import style from './header.module.css';
import LogoImage from '../../Images/Logo.jpg'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {logout, me} from "../../Redux-BLL/Reducers/AuthReducer";
import {Redirect} from "react-router";

const Header = (props) => {
    const onLogoutClick = () => {
        props.logout();
    };

    if (!props.isAuth) {
        return <Redirect to='/login'/>
    }

    return (
        <header className={style.wrapper}>
            <img className={style.logo} src={LogoImage} alt='logo'/>
            {props.isAuth && <div className={style.menuWrapper}>{props.userInfo.userName}
                <span onClick={onLogoutClick}>Logout
                                    </span>
            </div>}
            {!props.isAuth && <div>
                <NavLink className={style.menuWrapper} to='/login'>Sign In
                </NavLink>
            </div>}
        </header>
    );
};

class HeaderContainer extends React.Component {
    componentWillMount() {
        this.props.me();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        userInfo: state.authData.userInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        },
        me: () => dispatch(me())
    }
};

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

export default connectedHeader;

//export default Header;

/*
const mapStateToProps = (state) => {
    debugger
    return {
        isAuth: state.authData.isAuth,
        userInfo: state.authData.userInfo,
        userFirstName: state.profilePage.userFirstName
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        onLoginButtonClick: () => {
            dispatch(loginClick())
        }
    }
};


const connectedHeader = connect (mapStateToProps, mapDispatchToProps)(HeaderContainer);

export default connectedHeader;*/
