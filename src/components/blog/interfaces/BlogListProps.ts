import {IBlogArrayState} from "../../../store/blog/interfaces/BlogArrayState";

export interface IBlogListProps {
    // CSS classes
    classes: {
        field: string,
    },
    // Array blog records
    blogs: IBlogArrayState,
}