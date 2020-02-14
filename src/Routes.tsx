import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Header} from "./components/Header";
import {Home} from "./views/Home";
import {Login} from "./views/Login";
import {Blog} from "./views/Blog";
import {PrivateRoute} from "./components/PrivateRoute";
import {NotFound} from "./views/NotFound";
import {connect, Provider} from "react-redux";
import { verifyToken } from './store/auth/actions';
import './style.css';
import {Logout} from "./views/Logout";

interface IRoutesContainerProps {
    isAuth: boolean;
    verifyToken(token: string): void;
}

class RoutesContainer extends React.Component<IRoutesContainerProps> {
    render() {
        return (
            <Router>
                <CssBaseline/>
                <Header/>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/auth/login" component={Login}/>
                        <Route path="/blog" component={Blog}/>
                        <PrivateRoute path='/home' component={Blog}/>
                        <Route path="/logout" component={Logout}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
            </Router>
        )
    }
    componentDidMount(): void {
        // Auth user if token exist in local storage
        if (localStorage.token && !this.props.isAuth) {
            this.props.verifyToken(localStorage.token);
        }
    }
}

const mapStateToProps = (state: any) => ({isAuth: state.auth.isAuth});
const mapDispatchToProps = { verifyToken };

export const Routes = connect(mapStateToProps, mapDispatchToProps)(RoutesContainer);