import {AUTH_IS_LOADING, AUTH_TOGGLE_AUTH} from './actions';
import {IAuthState} from "./interfaces/AuthState";
import {TAuthActions} from "./interfaces/AuthActions";

const initialState: IAuthState = {
    isAuth: false,
    isLoading: false,
};

export function authReducer(state = initialState, action: TAuthActions) {
    switch (action.type) {
        case AUTH_TOGGLE_AUTH:
            return Object.assign({}, state, { isAuth: action.payload })
        case AUTH_IS_LOADING:
            return Object.assign({}, state, { isLoading: action.payload })
        default:
            return state;
    }
}
