import {IAction} from "./interfaces/Action";
import {IData} from "./interfaces/Data";

// Action types
export const ADD_NEW_BLOG = "ADD_BLOG";

// action creators
export function addNewBlog(data: IData): IAction {
    return {
        type: ADD_NEW_BLOG,
        payload: {
            description: data.description,
            date: data.date,
        },
    }
}