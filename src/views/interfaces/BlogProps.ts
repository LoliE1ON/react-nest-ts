import {IBlogState} from "../../store/blog/interfaces/BlogState";
import {IBlogArrayState} from "../../store/blog/interfaces/BlogArrayState";

export interface IBlogProps {
    addNewBlog(object: IBlogState): object,
    blogs: IBlogArrayState,
}