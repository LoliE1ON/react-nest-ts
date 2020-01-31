/*
 * action types
 */

export const ADD_BLOG = "ADD_BLOG";

/*
 * action creators
 */

interface IAction {
    type: string,
    payload: {
        description: string,
    }
}

export function addBlog(description: string): IAction {
    return {
        type: ADD_BLOG,
        payload: {
            description
        }
    }
}