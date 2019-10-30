import React from 'react';
import './login.scss'
import { useInputValue } from '../../hooks/useInputValue'


export const Login = ({ error, disabled, onSubmit, title }) =>{
    const userNAme = useInputValue ('');
    const password = useInputValue('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        onSubmit({
            userNAme: userNAme.value,
            password: password.value
        });
        return (
            <div className="login-container">
                      <div className="login-card">
                      <h2>Inicio de Sesión</h2>
                          <div className="row">
                              <div className="col-md-2">
                              <form onSubmit = { handleSubmit }>
                                      <input 
                                      name="userNAme"
                                      disabled = {disabled}
                                      //onChange={handleChange}
                                      type="text" 
                                      placeholder="Usuario *" 
                                      className="textbox"
                                      {...userNAme}/>
                              
                              
                                      <input 
                                      name="password"
                                      disabled = {disabled}
                                      //onChange={handleChange}
                                      type="password" 
                                      placeholder="Contraseña *" 
                                      className="textbox"/>
                              
                                      <br/><br/>
      
                                      <input className='loginButton'
                                          type="submit"
                                          name="submit"
                                          disabled = {disabled}
                                          //onClick={handleClick}
                                          value="Signin"
                                      />
      
                                      {/* <div> 
                                      {
                                              loginStatus.status==="loggedError" ? <span className="legend-error">email y/o correo no valido</span> : null
      
                                      }
                                          
                                      </div>
                                      <br/><br/> */}
                                  
                              
                                      {/* <a href="#" className="ForgetPwd">Olvidaste tu contraseña?</a> */}
                                  
                              </form>
                              </div>
                          </div>
                      </div>
                  </div>
        )
    }
}