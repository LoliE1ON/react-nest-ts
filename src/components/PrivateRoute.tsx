import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {connect} from "react-redux";

interface IPrivateRouteProps {
    component: any; // React.FC | React.Component? :thinking
    path: string;
    isAuth?: boolean;
}

export class PrivateRouteContainer extends React.Component<IPrivateRouteProps> {
    render() {
        return (
            <React.Fragment>
                { this.props.isAuth ? <Route path={this.props.path} component={this.props.component}/> : <Redirect to="/"/> }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
});

export const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteContainer);