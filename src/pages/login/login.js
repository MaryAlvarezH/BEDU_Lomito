import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error } from './styles';
import './login.scss'


export const UserLogin = ({ error, disabled, onSubmit }) =>{
    
    const userNAme = useInputValue ('');
    const password = useInputValue('');

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({
          userNAme: userNAme.value,
          password: password.value
        })
      }
    return (
        <Fragment>
            <div className="login-container">
                    <div className="login-card">
                    <h2>Inicio de Sesión</h2>
                        <div className="row">
                            <div className="col-md-2">
                            <form disabled={disabled} onSubmit = {handleSubmit}>
                                    <input className="textbox" name="userNAme"
                                    disabled = {disabled}
                                    //onChange={handleChange}
                                    type="text" 
                                    placeholder="Usuario *" 
                                    {...userNAme}/>

                                    <input className="textbox" name="password"
                                    disabled = {disabled}
                                    //onChange={handleChange}
                                    type="password" 
                                    placeholder="Contraseña *" 
                                    {...password}/>
                            
                                    <br/><br/>
    
                                    <input className='loginButton' type="submit" name="submit"
                                        disabled = {disabled}
                                        //onClick={handleClick}
                                        value="Signin"/>
    
                                    {/* <div> 
                                    {
                                            loginStatus.status==="loggedError" ? <span className="legend-error">email y/o correo no valido</span> : null
                                    }
                                    </div>
                                    <br/><br/> */}
                                    {/* <a href="#" className="ForgetPwd">Olvidaste tu contraseña?</a> */}
                                
                            </form>
                            {error && <Error>{error}</Error>}
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}