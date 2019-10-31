import React from 'react';
import axios from 'axios';
import {UserLogin} from "./login"

export const peticionLogin = async (evt) =>{
    try {
        const resp = await axios({
            method:'POST',
            url: 'https://lomito-server.herokuapp.com/api/auth/login',
            //url: ' http://localhost:4001/users',
            data: {username: UserLogin.username, password: UserLogin.password}
        })
    } catch(err)
    {console.log(err)}
    
}

export const LoginMutation = ({ children }) => {
    return <Mutation Mutation = { peticionLogin } > {children} </Mutation>
}
 