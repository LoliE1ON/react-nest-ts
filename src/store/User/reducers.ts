import {SET_CURRENT_USER, SET_PROFILE_USER} from "./actions";
import {IUserState} from "./interfaces/UserState";
import {UserActions} from "./interfaces/UserActions";

const initialState: IUserState = {
    currentUser: {
        _id: '',
        login: '',
        token: '',
    },
    profileUser: [],
};

export const userReducer = (state = initialState, action: UserActions): IUserState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, state, { currentUser: action.payload, });
        case SET_PROFILE_USER:
            return Object.assign({}, state, { profileUser: [
                ...state.profileUser,
                {
                    login: action.payload.login,
                    userId: action.payload.userId,
                }
            ]});
        default:
            return state;
    }
}