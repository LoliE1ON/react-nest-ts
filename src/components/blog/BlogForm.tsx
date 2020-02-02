import React, {RefObject} from "react";
import {Box, createStyles, TextField, Theme, withStyles} from "@material-ui/core";

import {IBlogFormProps} from "./interfaces/BlogFormProps";
import {IBlogFormState} from "./interfaces/BlogFormState";

export class BlogFormComponent extends React.Component<IBlogFormProps, IBlogFormState> {

    private readonly description: RefObject<HTMLInputElement>;

    constructor(props: IBlogFormProps) {
        super(props);
        this.description = React.createRef();
    }

    private onAddBlog = (event: React.KeyboardEvent) => {
        if (this.description.current && event.key === "Enter" && this.description.current.value.length > 0) {
            this.props.addNewBlog({
                description: this.description.current.value,
                date: '123',
            });
        }
    };

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Box fontSize={22} textAlign="center">Your Blog</Box>
                <TextField
                    inputRef={this.description} className={classes.field}
                    id="description" label="What's happened?" variant="filled" onKeyPress={this.onAddBlog}
                />
            </div>
        );
    }
}

const styles = (theme: Theme) => createStyles({
    field: {
        width: '100%',
        marginTop: 20,
        boxSizing: 'border-box'
    },
});

export const BlogForm = withStyles(styles)(BlogFormComponent);