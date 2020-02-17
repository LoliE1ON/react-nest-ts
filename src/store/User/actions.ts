import {ISetCurrentUserAction} from "./interfaces/SetCurrentUserAction";
import {IUser} from "./interfaces/User";
import {ISetProfileUser} from "./interfaces/SetProfileUser";
import {IPublicUser} from "./interfaces/PublicUser";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {API} from "../../config/api";

// Actions
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_PROFILE_USER = 'SET_PROFILE_USER';

// Action creators
export const setCurrentUser = (user: IUser): ISetCurrentUserAction => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    }
};
export const setProfileUser = (user: IPublicUser): ISetProfileUser => {
    return {
        type: SET_PROFILE_USER,
        payload: user,
    }
};

// Async action creators
export const getUser = (login: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        console.log(login)
        const url = `${API.host}${API.routes.user.get}/${login}`;

        return fetch(url)
        .then(response => {
            if(response.ok) {
                response.json().then(function(data) {
                    const user = data.user;
                    dispatch(setProfileUser(user));
                });
            }
        }).catch(reason => {
                console.error(reason);
        });

    }
}