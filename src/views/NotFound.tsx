import React from 'react';
import {Link} from "react-router-dom";

export class NotFound extends React.Component {
    render() {
        return(
            <div>
                <p>404 Not Found</p>
                <Link to="/">Home</Link>
            </div>
        )
    }
}