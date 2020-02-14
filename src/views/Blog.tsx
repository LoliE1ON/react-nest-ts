import React from "react";
import {BlogForm} from "../components/blog/BlogForm";
import {connect} from "react-redux";
import {addNewBlog} from "../store/blog/actions";
import {IBlogProps} from "./interfaces/BlogProps";
import {BlogList} from "../components/blog/BlogList";
import {Container} from "@material-ui/core";
import {BreadcrumbsComponent} from "../components/common/Breadcrumbs";

class BlogContainer extends React.Component<IBlogProps> {
    render() {
        return(
            <div className="pt1">
                <Container maxWidth="md">
                    <BreadcrumbsComponent/>
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