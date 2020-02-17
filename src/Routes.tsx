import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Header} from "./components/Header";
import {Home} from "./views/Home";
import {Login} from "./views/Login";
import {Blog} from "./views/Blog";
import {PrivateRoute} from "./components/PrivateRoute";
import {NotFound} from "./views/NotFound";
import {connect} from "react-redux";
import { verifyToken } from './store/auth/actions';
import './style.css';
import {Logout} from "./views/Logout";
import {User} from "./views/User";

interface IRoutesComponentProps {
    isAuth: boolean;
    verifyToken(token: string): void;
}

const RoutesComponent: React.FC<IRoutesComponentProps> = (props) => {

    // Auth user if token exist in local storage
    useEffect(() => {
        if (localStorage.token && !props.isAuth) {
            props.verifyToken(localStorage.token);
        }
    });

    return (
        <Router>
            <CssBaseline/>
            <Header/>
            <main>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth/login" component={Login}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/user/:userLogin" component={User}/>
                    <PrivateRoute path='/home' component={Blog}/>
                    <Route path="/logout" component={Logout}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
        </Router>
    );
};


const mapStateToProps = (state: any) => ({isAuth: state.auth.isAuth});
const mapDispatchToProps = { verifyToken };

export const Routes = connect(mapStateToProps, mapDispatchToProps)(RoutesComponent);