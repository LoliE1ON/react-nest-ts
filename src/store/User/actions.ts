import {ISetCurrentUserAction} from "./interfaces/SetCurrentUserAction";
import {IUser} from "./interfaces/IUser";

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user: IUser): ISetCurrentUserAction => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    }
};