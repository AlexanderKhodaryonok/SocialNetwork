import React from 'react';
import style from './sideBar.module.css';
import {withRouter} from "react-router-dom";
import SideBarNavItem from './SideBarNavItem/SideBarNavItem.js';
import PropTypes from 'prop-types';
import {Redirect} from "react-router";

const SideBar = (props) => {
    if (props.match.url === '/') {
        return <Redirect to='/login'/>
    }

    return (
        <aside className={style.wrapper}>
            <div className={style.navList}>
                <SideBarNavItem label='News' path='/news' location={props.location} match={props.match}/>
                <SideBarNavItem label='Find' path='/find' location={props.location} match={props.match}/>
                <SideBarNavItem label='Profile' path={'/profile'} location={props.location} match={props.match}/>
                <SideBarNavItem label='Conversations' path='/conversations/' location={props.location} match={props.match}/>
                {/*<SideBarNavItem label='Photo' path='/photo' location={location} match={match}/>
                <SideBarNavItem label='Music' path='/music' location={location} match={match}/>
                <SideBarNavItem label='Games' path='/games' location={location} match={match}/>
                <SideBarNavItem label='Settings' path='/settings' location={location} match={match}/>*/}
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