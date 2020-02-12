import {SET_SHOW_ERROR} from "../actions";

export interface ISetShowErrorAction {
    type: typeof SET_SHOW_ERROR;
    payload: boolean;
}