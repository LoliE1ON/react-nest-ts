import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/rootReducer";

import './style.css';
import CssBaseline from "@material-ui/core/CssBaseline";

import {Header} from "./components/Header";
import {Home} from "./views/Home";
import {Login} from "./views/Login";
import {NotFound} from "./views/NotFound";
import {Blog} from "./views/Blog";

const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <CssBaseline/>
                    <Header/>
                    <main>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/auth/login" component={Login}/>
                            <Route path="/blog" component={Blog}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </main>
                </Router>
            </Provider>
        )
    }
}

export default App;
