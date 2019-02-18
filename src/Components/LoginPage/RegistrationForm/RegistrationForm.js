import React from 'react';
import {connect} from "react-redux";
import {onLoginChange, onPasswordChange} from "../../../Redux-BLL/Reducers/loginPageReducer";

const RegistrationForm = (props) => {
    return (
        <div>
            <div>
                <p>{props.text}</p>
                <input type= 'text' onChange={props.onLoginChange} />
            </div>
            <div>
                <p>{props.text}</p>
                <input type= 'password' onChange={props.onPasswordChange} />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginChange: (text) => {
            dispatch(onLoginChange(text))
        },
        onPasswordChange: (text) => {
            dispatch(onPasswordChange(text))
        }
    }
};

const connectedRegistrationForm = connect(null, mapDispatchToProps)(RegistrationForm);

export default connectedRegistrationForm;