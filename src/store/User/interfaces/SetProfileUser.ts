import {SET_PROFILE_USER} from "../actions";
import {IPublicUser} from "./PublicUser";

export interface ISetProfileUser {
    type: typeof SET_PROFILE_USER,
    payload: IPublicUser,
}