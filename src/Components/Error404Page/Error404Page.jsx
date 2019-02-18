import React from 'react';
import style from "./error404Page.module.css";

const Error404Page = () => {
    return (
        <div className={style.notFoundBlock}>
            <div className={style.noMessagesText}>404 - PAGE NOT FOUND</div>
        </div>
    )
};

export default Error404Page;