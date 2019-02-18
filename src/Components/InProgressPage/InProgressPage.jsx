import React from 'react';
import style from "./inProgressPage.module.css";

const InProgressPage = () => {
    return (
        <div className={style.waitBlock}>
            <div className={style.waitText}>WAIT...</div>
        </div>
    )
};

export default InProgressPage;