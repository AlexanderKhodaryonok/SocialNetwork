import React from 'react';

const RegistrationFormItem = (props) => {
    return (
        <div>
            <p>{props.text}</p>
            <input type= 'text' value={props.elText}/>
        </div>
    );
};

export default RegistrationFormItem;