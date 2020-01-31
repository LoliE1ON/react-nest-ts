export interface IBlogFormProps {
    classes: {
        field: string,
    },
    addBlog(description: string): object,
}