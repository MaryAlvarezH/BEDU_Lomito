import React from 'react';
//import { auth } from '../../shared/auth';
import './login.scss'
import  {useState} from 'react';
import { UserContext } from '../../shared/user-context';
//import { compileFunction } from 'vm';
import axios from 'axios';

function Login(props) {
    const [user, setUser] = useState({username: '', password: ''});
    const [loginStatus,setLoginStatus] = useState({status:'disabled'})

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleClick = async(e, context) => {
        console.log('context',context)
        //const resp02 = await auth.signIn({username: user.username, password: user.password})
        const resp = await axios({
            method:'POST',
            url: 'https://lomito-server.herokuapp.com/api/auth/login',
            //url: ' http://localhost:4001/users',
            data: {username: user.username, password: user.password}
        })
        {console.log('respClick',resp)
            
    }
        //return resp;


        if (!resp.loggedIn) {
            console.error('email y/o correo no valido')
            setLoginStatus({status:'loggedError'})
            return
        }
        setLoginStatus({status:'loggedIn'})
        UserContext.setLoggedIn(user.username, user.password)
        props.history.push('/');
        props.setLoggedIn(true);

    }
    const evt = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

  return (
      <UserContext.Consumer>
          { context => (
                <div className="login-container">
                <div className="login-card">
                    <div className="row">
                        <div className="col-md-2">
                        <form onSubmit = {evt}>
                                <input 
                                name="username"
                                onChange={handleChange}
                                type="text" 
                                placeholder="User Name" 
                                className="textbox"/>
                        
                        
                                <input 
                                name="password"
                                onChange={handleChange}
                                type="password" 
                                placeholder="Contraseña *" 
                                className="textbox"/>
                        
                                <br/><br/>

                                <input
                                    type="submit"
                                    name="submit"
                                    onClick={handleClick}
                                    value="Signin"
                                />

                                <div> 
                                {
                                        loginStatus.status==="loggedError" ? <span className="legend-error">email y/o correo no valido</span> : null

                                }
                                    
                                </div>
                                <br/><br/>
                            
                        
                                <a href="#" className="ForgetPwd">Olvidaste tu contraseña?</a>
                            
                        </form>
                        </div>
                    </div>
                </div>
            </div>

          )
        }
      </UserContext.Consumer>
  )
}
export default Login;