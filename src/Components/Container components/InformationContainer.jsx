import React from 'react';
import Information from "../ProfilePage/ProfileContent/Information/Information";
import {withRouter} from "react-router";
import connect from "react-redux/es/connect/connect";
import {getInfo} from "../../Redux-BLL/Reducers/profilePageReducer";

class InformationContainer extends React.Component {

    componentDidUpdate() {
        debugger
        console.log(this.props.userId)
        /*this.props.userId && */this.props.getInfo(this.props.match.params.id);
    }

    render() {
        return (
            <Information />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.authData.userInfo.userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo: (id) => {
            dispatch(getInfo(id))
        }
    }
};

let connectedInformationContainer = connect(mapStateToProps, mapDispatchToProps)(InformationContainer);

export default withRouter(connectedInformationContainer);