import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import {Container, Paper, Box, Button} from "@material-ui/core";
import {fetchUserAuth, setShowError} from '../store/auth/actions';

import {LoginForm} from '../components/auth/login/LoginForm';
import {ILoginProps} from "./interfaces/LoginProps";
import {connect} from "react-redux";

const LoginContainer: React.FC<ILoginProps> = (props) => {
    const {isLoading, isAuth, fetchUserAuth, showError, setShowError} = props;
    return (
        <div className="pt1">
            <Container maxWidth="sm">
                <Paper elevation={1}>
                    <LoginForm isLoading={isLoading} showError={showError} setShowError={setShowError} isAuth={isAuth} fetchUserAuth={fetchUserAuth}/>
                </Paper>
                <Box textAlign="center" m={2}>
                    <Router>
                        <Button component={Link} to="/auth/register">Registration</Button>
                    </Router>
                </Box>
            </Container>
        </div>
    )
};

const mapStateToProps = (state: any) => ({
    user: state.user.currentUser,
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    showError: state.auth.showError,
});
const mapDispatchToProps = { fetchUserAuth, setShowError, };

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
