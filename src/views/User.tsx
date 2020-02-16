import React from 'react';
import {connect} from "react-redux";
import {Profile} from "../components/user/Profile";

export const UserContainer: React.FC = () => {
    return (
        <React.Fragment>
            <Profile/>
        </React.Fragment>
    )
};

export const User = connect(null, null)(UserContainer);