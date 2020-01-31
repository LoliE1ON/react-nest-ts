import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import {Container, Paper, Box, Button} from "@material-ui/core";

import {LoginForm} from '../components/auth/login/LoginForm';

export const Login = class LoginComponent extends React.Component {
    render() {
        return (
            <div className="pt1">
                <Container maxWidth="sm">
                    <Paper elevation={1}>
                        <LoginForm/>
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
