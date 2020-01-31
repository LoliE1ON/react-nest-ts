import {ADD_BLOG} from "./actions";

interface IAction {
    type: string,
    payload: object,
}

interface IBlogState {
    description: string,
}

const initialState: IBlogState[] = [];

export const blogReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case ADD_BLOG: {

            const newArray = [
                {
                    description: action.payload
                },
                ...state
            ];
            console.log(newArray)
            return newArray;


            //return Object.assign({}, state, action.payload)
        }
    }
    return state;
}