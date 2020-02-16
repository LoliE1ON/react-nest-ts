import {ISetCurrentUserAction} from "./interfaces/SetCurrentUserAction";
import {IUser} from "./interfaces/User";
import {ISetProfileUser} from "./interfaces/SetProfileUser";
import {IPublicUser} from "./interfaces/PublicUser";

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_PROFILE_USER = 'SET_PROFILE_USER';

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