import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './style.css';
import CssBaseline from "@material-ui/core/CssBaseline";

import {Header} from "./components/Header";
import {Home} from "./views/Home";
import {Login} from "./views/Login";
import {NotFound} from "./views/NotFound";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <CssBaseline/>
                    <Header/>
                    <main>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/auth/login" component={Login}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </main>
                </Router>
            </div>
        )
    }
}

export default App;
