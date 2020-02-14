import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import {Box, Breadcrumbs, Link, Typography, withStyles} from "@material-ui/core";
import {IBreadcrumbsProps} from "./interfaces/BreadcrumbsProps";
import {Link as RouterLink} from "react-router-dom";

const classes = {
    link: {
        display: 'flex',
    },
    icon: {
        width: 20,
        height: 20,
    },
};

class BreadcrumbsContainer extends React.Component<IBreadcrumbsProps> {
    render() {

        const { classes } = this.props;

        return (
            <Box p={2}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link className={classes.link} color="inherit"  component={RouterLink} to="/">
                        <AppsIcon className={classes.icon}/>
                        Home
                    </Link>
                    <Typography color="textPrimary">
                        Blog
                    </Typography>
                </Breadcrumbs>
            </Box>
        );
    }
}

export const BreadcrumbsComponent = withStyles(classes)(BreadcrumbsContainer);