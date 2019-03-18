import React, {useState} from 'react';
import style from './header.module.css';
import LogoImage from '../../Images/Logo.jpg'
import {NavLink} from "react-router-dom";
import {Redirect} from "react-router";

const Header = (props) => {

    let [redirect, setRedirect] = useState(false);

    const onLogoutClick = () => {
        props.logout();
        setRedirect(redirect = true);
        console.log(redirect)
    };

    return (
        <>
            {redirect && !props.isAuth && <Redirect to="/login"/>}
                <header className={style.wrapper}>
                <img className={style.logo} src={LogoImage} alt='logo'/>
                {props.isAuth && <div className={style.menuWrapper}>{props.userInfo.userName}
                    <span onClick={onLogoutClick}> Logout
                                 </span>
                </div>}
                {!props.isAuth && <div>
                    <NavLink className={style.menuWrapper} to='/login'>Sign In
                    </NavLink>
                </div>}
                </header>
                </>
                );
            };

            export default Header;