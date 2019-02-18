import React from 'react';
import {NavLink} from "react-router-dom";
import style from './SideBarNavItem.module.css';

const SideBarNavItem = (props) => {

    let isMenuItemSelected = props.location.pathname === props.path || props.location.pathname === `${props.path}${props.match.params.id}`;

    return (
        <div className={style.menuItem + ' ' + (isMenuItemSelected ? style.activeItemBlock : '') } >
            <NavLink to={props.path} activeClassName={style.active} className={style.navItem} >{props.label}</NavLink>
        </div>
    );
};

export default SideBarNavItem;