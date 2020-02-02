import {ADD_NEW_BLOG} from "./actions";
import {IAction} from "./interfaces/Action";
import {IBlogArrayState} from "./interfaces/BlogArrayState";

const initialState: IBlogArrayState = {
    items: [],
};

export const blogReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case ADD_NEW_BLOG: {
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    {
                        description: action.payload.description,
                        date: action.payload.date,
                    }
                ]
            });
        }
    }
    return state;
}