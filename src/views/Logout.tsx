import React, {useEffect} from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";
import {toggleAuth} from "../store/auth/actions";
import {ILogoutContainerProps} from "./interfaces/LogoutContainerProps";

const LogoutContainer: React.FC<ILogoutContainerProps> = (props) => {

    useEffect(() => {
        localStorage.removeItem('token');
        props.toggleAuth(false);
    });
    
    return (<Redirect to="/"/>);
};

const mapDispatchToProps = { toggleAuth };

export const Logout = connect(null, mapDispatchToProps)(LogoutContainer);