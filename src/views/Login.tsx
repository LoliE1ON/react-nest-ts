import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import {Container, Paper, Box, Button} from "@material-ui/core";
import {fetchUserAuth} from '../store/auth/actions';

import {LoginForm} from '../components/auth/login/LoginForm';
import {ILoginProps} from "./interfaces/LoginProps";
import {connect} from "react-redux";

class LoginContainer extends React.Component<ILoginProps> {
    render() {
        return (
            <div className="pt1">
                <Container maxWidth="sm">
                    <Paper elevation={1}>
                        <LoginForm fetchUserAuth={this.props.fetchUserAuth}/>
                    </Paper>
                    <Box textAlign="center" m={2}>
                        <Router>
                            <Button component={Link} to="/auth/register">Registration</Button>
                        </Router>
                    </Box>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    user: state.user.currentUser,
    auth: {
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading,
    }
})



const mapDispatchToProps = {
    fetchUserAuth,
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
