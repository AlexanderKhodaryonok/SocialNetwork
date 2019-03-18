import React from "react";
import Header from "../Header/Header";
import {logout, me} from "../../Redux-BLL/Reducers/AuthReducer";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentWillMount() {
        this.props.me();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        userInfo: state.authData.userInfo,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        me:  () => {
            dispatch(me());
        },

        logout: () => {
            dispatch(logout());
        },
    }
};

HeaderContainer.propTypes = {
    isAuth: PropTypes.bool,
    userInfo: PropTypes.object,
    logout: PropTypes.func
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

export default ConnectedHeader;