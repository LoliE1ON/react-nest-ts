import {SET_CURRENT_USER, SET_PROFILE_USER} from "./actions";
import {IUserState} from "./interfaces/UserState";
import {UserActions} from "./interfaces/UserActions";

const initialState: IUserState = {
    currentUser: {
        _id: '',
        login: '',
        token: '',
    },
    profileUser: {
        login: '',
    },
};

export const userReducer = (state = initialState, action: UserActions): IUserState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, state, { currentUser: action.payload, });
        case SET_PROFILE_USER:
            return Object.assign({}, state, { profileUser: action.payload, });
        default:
            return state;
    }
}