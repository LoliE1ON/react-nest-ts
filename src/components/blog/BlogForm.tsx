import React, {RefObject} from "react";
import {Box, Container, createStyles, Paper, TextField, Theme, withStyles} from "@material-ui/core";

import {IBlogFormProps} from "./interfaces/BlogFormProps";
import {IBlogFormState} from "./interfaces/BlogFormState";
import {LoginForm} from "../auth/login/LoginForm";

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

                <Paper elevation={1}>
                    <Box p={4} textAlign="center">
                        <TextField
                        inputRef={this.description} className={classes.field} variant="outlined"
                        id="description" label="What's happened?" multiline rows="4" onKeyPress={this.onAddBlog}
                    />
                    </Box>
                </Paper>

            </div>
        );
    }
}

const styles = (theme: Theme) => createStyles({
    field: {
        width: '100%',
        boxSizing: 'border-box'
    },
});

export const BlogForm = withStyles(styles)(BlogFormComponent);