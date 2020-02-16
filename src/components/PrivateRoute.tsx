import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {connect} from "react-redux";

interface IPrivateRouteContainerProps {
    component: any; // React.FC | React.Component? :thinking
    path: string;
    isAuth?: boolean;
}

const PrivateRouteContainer: React.FC<IPrivateRouteContainerProps> = (props) => (
    <React.Fragment>
        { props.isAuth ? <Route path={props.path} component={props.component}/> : <Redirect to="/auth/login"/> }
    </React.Fragment>
);

const mapStateToProps = (state: any) => ({ isAuth: state.auth.isAuth });
export const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteContainer);