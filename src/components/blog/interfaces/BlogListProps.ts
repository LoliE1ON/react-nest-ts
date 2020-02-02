import {IBlogArrayState} from "../../../store/blog/interfaces/BlogArrayState";

export interface IBlogListProps {
    classes: {
        field: string,
    },
    blogs: IBlogArrayState,
}