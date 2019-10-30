import React from 'react';
import axios from 'axios';

const resp = await axios({
    method:'POST',
    url: 'https://lomito-server.herokuapp.com/api/auth/login',
    //url: ' http://localhost:4001/users',
    data: {userNAme: user.email, password: user.password}
})

export const LoginMutation = ({ children }) => {
    return (
        <Mutation Mutation = {resp}>
            {children}
        </Mutation>
    );
}