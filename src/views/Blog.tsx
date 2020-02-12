import React from "react";
import {BlogForm} from "../components/blog/BlogForm";

import {Breadcrumbs, Container, Link, Typography} from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';

import {connect} from "react-redux";
import {addNewBlog} from "../store/blog/actions";
import {IBlogProps} from "./interfaces/BlogProps";
import {BlogList} from "../components/blog/BlogList";

class BlogContainer extends React.Component<IBlogProps> {
    render() {
        return(
            <div className="pt1">

                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        <AppsIcon/>
                        Home
                    </Link>
                    <Typography color="textPrimary">
                        Blog
                    </Typography>
                </Breadcrumbs>

                <Container maxWidth="md">
                    <BlogForm addNewBlog={this.props.addNewBlog}/>
                    <BlogList blogs={this.props.blogs}/>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        blogs: state.blog
    }
}

const mapDispatchToProps = {
    addNewBlog,
};

export const Blog = connect(mapStateToProps, mapDispatchToProps)(BlogContainer);