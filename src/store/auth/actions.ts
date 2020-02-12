import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {AnyAction} from 'redux';
import {API} from '../../config/api';

import {setCurrentUser} from "../User/actions";
import {IUser} from "../User/interfaces/IUser";
import {IToggleAuthAction} from "./interfaces/ToggleAuthAction";
import {IIsLoadingAction} from "./interfaces/IsLoadingAction";
import {ISetShowErrorAction} from "./interfaces/SetShowErrorAction";

// Actions
export const AUTH_TOGGLE_AUTH = 'TOGGLE_AUTH';
export const AUTH_IS_LOADING = 'IS_LOADING';
export const SET_SHOW_ERROR = 'SET_SHOW_ERROR';

// Action creators
export const toggleAuth = (auth: boolean = false): IToggleAuthAction  => {
    return {
        type: AUTH_TOGGLE_AUTH,
        payload: auth
    }
};

export const isLoading = (loading: boolean = false): IIsLoadingAction  => {
    return {
        type: AUTH_IS_LOADING,
        payload: loading
    }
};

export const setShowError = (show: boolean = false): ISetShowErrorAction  => {
    return {
        type: SET_SHOW_ERROR,
        payload: show
    }
};

// Async action creators
export const fetchUserAuth = (login: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {

        dispatch(isLoading(true));
        const url = `${API.host}${API.routes.auth.login}`;

        return new Promise(function(resolve) {
            setTimeout(function() {
                dispatch(isLoading(false));
                dispatch(setShowError(true));
                resolve();
            }, 1000);
        });

        /*
        return fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json', Accept: 'application/json',},
            body: JSON.stringify({ login, password }),
        })
        .then(response => {
            if(response.ok) {
                try {
                    response.json().then(function(data) {
                        const user: IUser = data.user;
                        dispatch(setCurrentUser(user));
                        dispatch(toggleAuth(true));
                    });
                } catch (e) {
                    console.log(e)
                }
            }
            dispatch(isLoading(false));
        }).catch(reason => {
            dispatch(isLoading(false));
        });

        */


    }
}