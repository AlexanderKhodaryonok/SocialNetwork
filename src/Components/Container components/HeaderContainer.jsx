import React from "react";
import Header from "../Header/Header";
import {loginClick} from "../../Redux-BLL/Reducers/loginPageReducer";
import connect from "react-redux/es/connect/connect";
import {me} from "../../Redux-BLL/Reducers/AuthReducer";

class HeaderContainer extends React.Component {
    componentWillMount(){
        this.props.me();
    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        userInfo: state.authData.userInfo,
        userFirstName: state.profilePage.userFirstName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginButtonClick: () => {
            dispatch(loginClick())
        },
        me: () => () => dispatch(me())
    }
};

const connectedHeader = connect (mapStateToProps, mapDispatchToProps)(HeaderContainer);

export default connectedHeader;