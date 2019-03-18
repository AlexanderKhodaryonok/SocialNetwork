import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {clearUsers, getUsers} from "../../Redux-BLL/Reducers/usersPageReducer";
import PropTypes from 'prop-types';
import style from "../UsersPage/UsersContent/usersContent.module.css";
import {NavLink} from "react-router-dom";
//not use
const UsersContentHook = ({ users, clearUsers, getUsers }) => {

    let [page, setPage] = useState (1);

    const showMoreUsers = (page) => setPage(page);

    useEffect(() => {
        console.log('вызов useEffect');
        getUsers(page);

        return () => {
            debugger
        };
    },[page] );

    /*showMoreUsers = (page) => {
        debugger
        //page = page + 1;
        //setPage(page);
        debugger
        //getUsers(page);
    };
*/



    return (
        <div className={style.wrapper}>
            {!users.length && <span>users not found</span>}
            {
                users.map(user => <div key={user.id} className={style.itemsBlock}>
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
            <button onClick={() => showMoreUsers (page+1)} > Show More </button>
        </div>
    )
};

UsersContentHook.propTypes = {
    users: PropTypes.array,
    getUsers: PropTypes.func,
    clearUsers: PropTypes.func
};

const mapStateToProps= (state) => {
    return {
        users: state.usersPage.users,
    }
};

const mapDispatchToProps= (dispatch) => {
    return {
        getUsers: (counter) => {
            dispatch(getUsers(counter))
        },
        clearUsers: () => {
            dispatch(clearUsers())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContentHook);


