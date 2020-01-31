import React from "react";
import {BlogForm} from "../components/blog/BlogForm";
import {Container} from "@material-ui/core";

export class Blog extends React.Component {
    render() {
        return(
            <div className="pt1">
                <Container maxWidth="md">
                    <BlogForm/>
                </Container>
            </div>
        );
    }
}