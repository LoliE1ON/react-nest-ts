import React from "react";
import {Dispatch} from 'redux';
import {BlogForm} from "../components/blog/BlogForm";
import {Container} from "@material-ui/core";
import {connect} from "react-redux";
import {addBlog} from "../store/blog/actions";
import {IBlogFormProps} from "../components/blog/interfaces/BlogFormProps";

class BlogContainer extends React.Component<IBlogFormProps> {
    render() {
        return(
            <div className="pt1">
                <Container maxWidth="md">
                    <BlogForm addBlog={this.props.addBlog}/>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        description: state.blog
    }
}

const mapDispatchToProps = {
    addBlog,
};

export const Blog = connect(mapStateToProps, mapDispatchToProps)(BlogContainer);