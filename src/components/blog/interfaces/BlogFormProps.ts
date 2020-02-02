import {IBlogState} from "../../../store/blog/interfaces/BlogState";

export interface IBlogFormProps {
    classes: {
        field: string,
    },
    addNewBlog(object: IBlogState): object
}