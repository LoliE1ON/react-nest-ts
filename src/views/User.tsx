import React from 'react';
import {connect} from "react-redux";
import {Profile} from "../components/user/Profile";
import {getUser} from "../store/User/actions";
import {IUserContainerProps} from "./interfaces/UserContainerProps";

export const UserContainer: React.FC<IUserContainerProps> = (props) => {
    return (
        <React.Fragment>
            <Profile users={props.users} getUser={props.getUser}/>
        </React.Fragment>
    )
};

const mapStateToProps = (state: any) => ({
    users: state.user.profileUser
});

const mapDispatchToProps = {
    getUser
};
export const User = connect(mapStateToProps, mapDispatchToProps)(UserContainer);