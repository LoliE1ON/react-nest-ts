import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from "./store/rootReducer";
import { Routes } from './Routes';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
};

export default App;
