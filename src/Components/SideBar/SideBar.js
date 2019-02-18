import React from 'react';
import style from './sideBar.module.css';
import {withRouter} from "react-router-dom";
import SideBarNavItem from './SideBarNavItem/SideBarNavItem.js';

const SideBar = (props) => {

    let profileTag = props.match.url === '/' ?
        <SideBarNavItem label='Profile' path={'/'} location={props.location} match={props.match}/> :
        <SideBarNavItem label='Profile' path={'/profile'} location={props.location} match={props.match}/>;

    return (
        <aside className={style.wrapper}>
            <div className={style.navList}>
                <SideBarNavItem label='Find' path='/find' location={props.location} match={props.match}/>
                <SideBarNavItem label='News' path='/news' location={props.location} match={props.match}/>
                {profileTag}
                <SideBarNavItem label='Conversations' path='/conversations/' location={props.location} match={props.match}/>
                <SideBarNavItem label='Photo' path='/photo' location={props.location} match={props.match}/>
                <SideBarNavItem label='Music' path='/music' location={props.location} match={props.match}/>
                <SideBarNavItem label='Games' path='/games' location={props.location} match={props.match}/>
                <SideBarNavItem label='Settings' path='/settings' location={props.location} match={props.match}/>
            </div>
        </aside>
    );
};

let HOCSideBar = withRouter(SideBar);

export default HOCSideBar;