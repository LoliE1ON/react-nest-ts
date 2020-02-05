import {SET_CURRENT_USER} from "../actions";
import {IUser} from "./IUser";

export interface ISetCurrentUserAction {
    type: typeof SET_CURRENT_USER,
    payload: IUser,
}