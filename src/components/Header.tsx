import React from 'react';
import {Link} from "react-router-dom";

import {AppBar, createStyles, IconButton, Button, Theme, Toolbar, Typography, withStyles} from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';

interface IHeaderProps {
    classes: {
        root: string,
        menuButton: string,
        title: string,
    }
}

class HeaderComponent extends React.Component<IHeaderProps> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                    component={Link} to="/">
                            <AppsIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Application
                        </Typography>
                        <Button color="inherit" component={Link} to="/blog">Blog</Button>
                        <Button color="inherit" component={Link} to="/auth/login">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        width: '100vw',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

export const Header = withStyles(styles)(HeaderComponent);