import React from 'react';
import {connect} from "react-redux";
import UsersContent from "../UsersPage/UsersContent/UsersContent";
import {clearUsers, getUsers} from "../../Redux-BLL/Reducers/usersPageReducer";

class UsersContentContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };
    }

    componentWillMount() {
        this.showMoreUsers();
    }

    componentWillUnmount() {
        this.props.clearUsers()
    }

    showMoreUsers = () => {
        this.props.getUsers(this.state.page);
        this.setState({
            page: this.state.page + 1,
        })
    };

    render() {
        return <UsersContent {...this.props} showMoreUsers={this.showMoreUsers.bind(this)} />
    }
}

const mapStateToProps= (state) => {
    return {
        users: state.usersPage.users,
        status: state.usersPage.status
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContentContainer);