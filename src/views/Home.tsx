import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container} from '@material-ui/core';

export class Home extends React.Component {
    render() {
        return (
            <div className="pt1">
                <CssBaseline/>
                <Container maxWidth="sm">
                    Home
                </Container>
            </div>
        )
    }
}
