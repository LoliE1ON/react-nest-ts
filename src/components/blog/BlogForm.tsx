import React, {RefObject} from "react";
import {Box, createStyles, Paper, TextField, withStyles} from "@material-ui/core";
import {IBlogFormProps} from "./interfaces/BlogFormProps";

const BlogFormComponent: React.FC<IBlogFormProps> = (props) => {

    const description: RefObject<HTMLInputElement> = React.createRef();
    const onAddBlog = (event: React.KeyboardEvent) => {
        if (description.current && event.key === "Enter" && description.current.value.length > 0) {
            props.addNewBlog({
                description: description.current.value,
                date: '123',
            });
        }
    };

    const { classes } = props;
    return(
        <div>
            <Paper elevation={1}>
                <Box p={4} textAlign="center">
                    <TextField
                        inputRef={description} className={classes.field} variant="outlined"
                        id="description" label="What's happened?" multiline rows="4" onKeyPress={onAddBlog}
                    />
                </Box>
            </Paper>
        </div>
    );

};

const styles = () => createStyles({
    field: {
        width: '100%',
        boxSizing: 'border-box'
    },
});

export const BlogForm = withStyles(styles)(BlogFormComponent);