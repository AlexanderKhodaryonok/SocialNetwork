import React from 'react';
import {NavLink} from "react-router-dom";
import style from './usersContent.module.css'
import PropTypes from 'prop-types';

const UsersContent = ({users, showMoreUsers, defaultPhoto}) => {
    return (
        <div className={style.wrapper}>
            {!users.length && <span>users not found</span>}
            {
                users.map(user => <div key={user.id} className={style.itemsBlock}>
                    <div className={style.item}>
                        <div>
                            {
                                user.photos.small &&
                                <img className={style.image} src={user.photos.small} alt='avatar'/> ||
                                <img className={style.image} src={defaultPhoto} alt='avatar'/>
                            }
                        </div>
                        <div>
                            <NavLink to={`users/${user.id}`}>{user.name}</NavLink>
                            <div className={style.status}>{user.status}</div>
                        </div>
                    </div>
                </div>)
            }
            <button onClick={showMoreUsers} > Show More </button>
        </div>
    )
};

UsersContent.propTypes = {
    users: PropTypes.array,
    showMoreUsers: PropTypes.func,
};

export default UsersContent;