import React from 'react';
import {NavLink} from "react-router-dom";
import style from './SideBarNavItem.module.css';
import PropTypes from 'prop-types';

const SideBarNavItem = ({label, path, location, match}) => {

    let isMenuItemSelected = location.pathname === path || location.pathname === `${path}${match.params.id}`;

    return (
        <div className={style.menuItem + ' ' + (isMenuItemSelected ? style.activeItemBlock : '') } >
            <NavLink to={path} activeClassName={style.active} className={style.navItem} >{label}</NavLink>
        </div>
    );
};

SideBarNavItem.ropTypes = {
    path: PropTypes.string,
    label: PropTypes.string,
};

export default SideBarNavItem;