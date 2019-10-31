import React, { Component } from 'react'
import { axiosInstance } from '../../shared/helpers';
import { NavLink } from 'react-router-dom';
import './human-register.scss';

class HumanRegister extends Component{
state = {
   name:'',
   lastName:'',
   email:'',
   password:'',
   username: '',
   street:'',
   state:'',
   zip:'',
   userId: null,
   errorLegend: null
}

    onSubmitHandler = async (evt) => {
      evt.preventDefault();
      try {
         const {data} = await axiosInstance.post('auth/signup',this.state);
         console.log('data', data);
         console.log('id', data._id);
         console.log('id', data.message);

         if (data && data._id) {
            this.setState({userId: data._id});
         } else if (data && data.status && data.message) {
            this.setState({errorLegend: data.message});
         } else{
            this.setState({errorLegend: 'Ocurrió un error durante el registro'});
         }
     } catch(err){
        console.log(err)
      }
      
   }

   onChangeHandler = (evt) => {
      const {name, value} = evt.target;
      this.setState({[name]: value});
   }
   
   render(){
      return(
      <section className="container-humano">
      <div className="flat-form">
        <h2>Registarse</h2>
        <p> 
           Para poder solicitar un lomito en adopción o bien buscar un nuevo hogar para tu mascota es necesario registarte.
        </p>
         <form onSubmit ={this.onSubmitHandler}>
            <ul className="tabs">
         <li>
            <label htmlFor="firstName"/>    
            <input type="text" value={this.state.name} name="name" 
            onChange={this.onChangeHandler} 
            placeholder="Nombre"/>
         </li>
         <li>
            <label htmlFor="lastName"></label>    
            <input type="text" value={this.state.lastName} name="lastName" 
            onChange={this.onChangeHandler} placeholder="Apellido"/>
         </li>
         <li>
            <label htmlFor="email"></label>    
            <input type="text" value={this.state.email} name="email" 
            onChange={this.onChangeHandler} placeholder="Correo Electronico"/>
         </li>
         <li>
            <label htmlFor="username"></label>    
            <input type="text" value={this.state.username} name="username" 
            onChange={this.onChangeHandler} placeholder="Username"/>
         </li>
         <li>
            <label htmlFor="password" ></label>    
            <input type="password" value={this.state.password} name="password" 
            onChange={this.onChangeHandler} placeholder="Contraseña"/>
         </li>
         {/* <li>
            <label htmlFor="confirmPassword"></label>    
            <input type="password" value={this.state.confirmPassword} name="confirmPassword" 
            onChange={this.onChangeHandler} placeholder="Confirmar contraseña"/>
         </li> */}

         <li>
            <label htmlFor="state"></label>    
            <select value={this.state.state} name="state" 
            onChange={this.onChangeHandler} placeholder="estado">
            <option value="no"> Estado..</option>
            <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Coahuila">Coahuila</option>
                  <option value="Colima">Colima</option>
                  <option value="Ciudad de México">Ciudad de México</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="San Luis Potosí">San Luis Potosí</option>
                  <option value="Sinaloa">Sinaloa</option>
                  <option value="Sonora">Sonora</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Tamaulipas">Tamaulipas</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Veracruz">Veracruz</option>
                  <option value="Yucatán">Yucatán</option>
                  <option value="Zacatecas">Zacatecas</option>
            </select>
         </li>
         <li>
            <label htmlFor="street"></label>          
            <input type="text" value={this.state.street} name="street" 
            onChange={this.onChangeHandler} placeholder="Calle"></input>
         </li>
         <li>
             <label htmlFor="zip"></label>    
            <input type="text" value={this.state.zip} name="zip" 
            onChange={this.onChangeHandler} placeholder="Codigo Postal"></input>
         </li>
         <li>

         </li>
         <li>
            <div className="legend-container">
               {
                  this.state.userId ==null && this.errorLegend !==null &&
                  <span  className="legend-advice">{this.state.errorLegend}</span>
               }
               {
                  this.state.userId === null &&
                  <input type='submit' className="btn-send" value="Enviar Datos"/>
               }
               {
                  this.state.userId !== null && this.state.errorLegend ===null &&
                  <div>
                     <span className="legend-success">Guardado exitoso</span>
                     <NavLink className="legend-link" exact to={`/login`}>Log in</NavLink>
                  </div>
               }
            </div>
           
         </li>
         </ul>

         </form>
         </div>

         </section>

            );
   }
}
export default HumanRegister