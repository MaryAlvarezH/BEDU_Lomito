import React from 'react';
import { auth } from '../../shared/auth';
import './login.scss'
import { UserContext } from '../../shared/user-context';

function Login(props) {
    const [user, setUser] = React.useState({user: '', password: ''});
    const [loginStatus,setLoginStatus] = React.useState({status:'disabled'})

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleClick = async(e, context) => {
        console.log('context',context)
        const resp = await auth.signIn({email: user.email, password: user.password})
        console.log('respClick',resp)


        if (!resp.loggedIn) {
            console.error('email y/o correo no valido')
            setLoginStatus({status:'loggedError'})
            return
        }
        setLoginStatus({status:'loggedIn'})
        // UserContext.setLoggedIn(user.email, user.password)
        props.history.push('/');
        props.setLoggedIn(true);

    }

  return (
      <UserContext.Consumer>
          { context => (
            
              
               <div className="login-container">
                    <div className="login-card">
                        <div className="row">
                            <div className="col-md-2">
                            <form>
                                    <input 
                                    name="email"
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="Correo *" 
                                    className="textbox"/>
                            
                            
                                    <input 
                                    name="password"
                                    onChange={handleChange}
                                    type="password" 
                                    placeholder="Contraseña *" 
                                    className="textbox"/>
                            
                                    <br/><br/>

                                    <input
                                        type="button"
                                        name="submit"
                                        onClick={handleClick({...context})}
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
