import {ISetCurrentUserAction} from "./interfaces/SetCurrentUserAction";
import {SET_CURRENT_USER} from "./actions";
import {IUserState} from "./interfaces/UserState";

const initialState: IUserState = {
    currentUser: {
        _id: '',
        login: '',
        token: '',
    },
};

export const userReducer = (state = initialState, action: ISetCurrentUserAction): IUserState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, state, { currentUser: action.payload, });
        default:
            return state;
    }
}