import React from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";
import {toggleAuth} from "../store/auth/actions";

class LogoutContainer extends React.Component<{ toggleAuth(state: boolean): void }> {

    render() {
        return (<Redirect to="/"/>);
    }

    componentDidMount(): void {
        // Logout
        localStorage.removeItem('token');
        this.props.toggleAuth(false);
    }
}

const mapDispatchToProps = {
    toggleAuth,
};

export const Logout = connect(null, mapDispatchToProps)(LogoutContainer);