import React from 'react';
import style from './sideBar.module.css';
import {withRouter} from "react-router-dom";
import SideBarNavItem from './SideBarNavItem/SideBarNavItem.js';
import PropTypes from 'prop-types';

const SideBar = ({match, location}) => {
    let profileTag = match.url === '/' ?
        <SideBarNavItem label='Profile' path={'/'} location={location} match={match}/> :
        <SideBarNavItem label='Profile' path={'/profile'} location={location} match={match}/>;

    return (
        <aside className={style.wrapper}>
            <div className={style.navList}>
                <SideBarNavItem label='Find' path='/find' location={location} match={match}/>
                <SideBarNavItem label='News' path='/news' location={location} match={match}/>
                {profileTag}
                <SideBarNavItem label='Conversations' path='/conversations/' location={location} match={match}/>
                <SideBarNavItem label='Photo' path='/photo' location={location} match={match}/>
                <SideBarNavItem label='Music' path='/music' location={location} match={match}/>
                <SideBarNavItem label='Games' path='/games' location={location} match={match}/>
                <SideBarNavItem label='Settings' path='/settings' location={location} match={match}/>
            </div>
        </aside>
    );
};

SideBar.propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
};

let HOCSideBar = withRouter(SideBar);

export default HOCSideBar;