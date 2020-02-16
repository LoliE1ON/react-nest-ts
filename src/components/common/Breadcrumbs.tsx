import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import {Box, Breadcrumbs, Link, Typography, withStyles} from "@material-ui/core";
import {IBreadcrumbsProps} from "./interfaces/BreadcrumbsProps";
import {Link as RouterLink} from "react-router-dom";

const BreadcrumbsContainer: React.FC<IBreadcrumbsProps> = (props) => {
    const { classes } = props;

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
};

const classes = {
    link: {
        display: 'flex',
    },
    icon: {
        width: 20,
        height: 20,
    },
};

export const BreadcrumbsComponent = withStyles(classes)(BreadcrumbsContainer);