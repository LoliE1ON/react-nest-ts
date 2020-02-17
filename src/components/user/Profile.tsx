import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IProfileProps} from "./interfaces/ProfileProps";

export const Profile: React.FC<IProfileProps> = (props) => {

    const { userLogin } = useParams();
    const [state, setState] = useState({
        login: '',
        userId: '',
    });

    useEffect(() => {
        const user = props.users.filter(user => user.login === userLogin)[0];
        if (user) setState({
            login: user.login,
            userId: user.userId,
        });
        else props.getUser(userLogin || '');
    }, [props.users]);

    return (
        <div>Profile {state.login}</div>
    )
};
