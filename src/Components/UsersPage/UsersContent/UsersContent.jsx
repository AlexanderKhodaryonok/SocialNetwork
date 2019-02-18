import React from 'react';
import {NavLink} from "react-router-dom";
import style from './usersContent.module.css'

const UsersContent = (props) => {

    return (
        <div className={style.wrapper}>
            {!props.users.length && <span>users not found</span>}
            {
                props.users.map(user => <div key={user.id} className={style.itemsBlock}>
                    <div className={style.item}>
                        <div>
                            <img className={style.image} src={user.photo} alt='avatar'/>
                        </div>
                        <div>
                            <NavLink to={`users/${user.id}`}>{user.name}</NavLink>
                            <div className={style.status}>{user.status}</div>
                        </div>
                    </div>
                </div>)
            }
            <button onClick={props.showMoreUsers} > Show More </button>
        </div>
    )
};

export default UsersContent;