import {AUTH_IS_LOADING} from "../actions";

export interface IIsLoadingAction {
    type: typeof AUTH_IS_LOADING;
    payload: boolean;
}