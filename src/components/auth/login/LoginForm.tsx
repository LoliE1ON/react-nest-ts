import React, {RefObject} from 'react';
import {Box, TextField, Button, Theme, InputAdornment, createStyles, withStyles} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import {ILoginFormProps} from "./interfaces/ILoginFormProps";
import {ILoginFormState} from "./interfaces/ILoginFormState";


class LoginFormComponent extends React.Component<ILoginFormProps, ILoginFormState> {

    private readonly login: RefObject<HTMLInputElement>;
    private readonly password: RefObject<HTMLInputElement>;

    constructor(props: ILoginFormProps) {
        super(props);

        this.login = React.createRef();
        this.password = React.createRef();
    }

    private handleLoginClick = () => {
        if (this.login.current && this.password.current) {
            this.props.fetchUserAuth(this.login.current.value, this.password.current.value);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Box p={3}>

                <Box fontSize={22} textAlign="center">Login</Box>

                <TextField className={classes.field} id="login" label="Your Login"
                   inputRef={this.login}
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start">
                               <PersonIcon/>
                           </InputAdornment>
                       ),
                   }}
                />

                <TextField className={classes.field} id="password" label="Password"
                   inputRef={this.password}
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start">
                               <VpnKeyIcon/>
                           </InputAdornment>
                       ),
                   }}
                />

                <Button className={classes.field} variant="contained" color="primary" onClick={this.handleLoginClick}>
                    Log in
                </Button>

            </Box>
        )
    }
}

const styles = (theme: Theme) => createStyles({
    field: {
        width: '100%',
        marginTop: 20,
        boxSizing: 'border-box'
    },
});

export const LoginForm = withStyles(styles)(LoginFormComponent);