import {AUTH_TOGGLE_AUTH} from "../actions";

export interface IToggleAuthAction {
    type: typeof AUTH_TOGGLE_AUTH;
    payload: boolean,
}