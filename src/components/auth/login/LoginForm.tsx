import React, {RefObject} from 'react';
import { Redirect } from 'react-router-dom';
import {Box, TextField, Button, InputAdornment, createStyles, withStyles, LinearProgress } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {ILoginFormProps} from "./interfaces/ILoginFormProps";

const LoginFormComponent: React.FC<ILoginFormProps> = (props) => {

    const login: RefObject<HTMLInputElement> = React.createRef();
    const password: RefObject<HTMLInputElement>= React.createRef();

    const handleLoginClick = () => {
        if (login.current && password.current) {
            props.fetchUserAuth(login.current.value, password.current.value);
        }
    };

    const { isAuth, showError, isLoading, classes } = props;

    const error = () => (<Box className={classes.errorBox} p={3}>Login or password incorrect!</Box>);
    const loading = () => (<LinearProgress variant="query" />);
    const redirect = () => (<Redirect to="/home"/>);

    return (
        <div>

            {isAuth && redirect()}
            {showError && error()}

            <Box p={3}>

                {isLoading && loading()}

                <Box fontSize={22} textAlign="center">Login</Box>

                <TextField className={classes.field} id="login" label="Your Login"
                           inputRef={login}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <PersonIcon/>
                                   </InputAdornment>
                               ),
                           }}
                />

                <TextField className={classes.field} id="password" label="Password"
                           inputRef={password}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <VpnKeyIcon/>
                                   </InputAdornment>
                               ),
                           }}
                />

                <Button className={classes.field} variant="contained" color="primary" onClick={handleLoginClick}>
                    Log in
                </Button>

            </Box>
        </div>
    )

};

const styles = () => createStyles({
    field: {
        width: '100%',
        marginTop: 20,
        boxSizing: 'border-box'
    },
    errorBox: {
        background: '#ffefef',
        borderBottom: '1px solid #f9dfdf',
        color: '#c01a1a'
    }
});

export const LoginForm = withStyles(styles)(LoginFormComponent);