import React, { Component } from 'react'
import './human-register.scss'
import { async } from 'q';
import axios from 'axios';


class HumanRegister extends Component{
state = {
   firstName:'',
   lastName:'',
   email:'',
   password:'',
   street:'',
   state:'',
   zip:'',
   status:''
    }

    onSubmitHandler = async (evt) => {
      evt.preventDefault();
      //console.log(this.state);
      try {
         const result = await axios({
             method:'POST',
             //url: 'https://lomito-server.herokuapp.com/api/auth/signup',
             url: 'http://localhost:4001/users',
             data: this.state
         })
     } catch(err)
     {console.log(err)}
      
   }

   onChangeHandler = (evt) => {
      const {name, value} = evt.target
      this.setState({
      [name]: value
      })
   }


   


   render(){
      return(
      <section className="container-humano">
      <div className="flat-form">
        <h2>Registro Humano</h2>
        <p> Este es un Registro único para el humano
            que va a dar en adopcion o adoptar, ya que los datos
            son importantes para otros humanos
         </p>
         <form onSubmit ={this.onSubmitHandler}>
            <ul className="tabs">
         <li>
            <label htmlFor="firstName"/>    
            <input type="text" value={this.state.firstName} name="firstName" 
            onChange={this.onChangeHandler} 
            placeholder="Nombres"/>
         </li>
         <li>
            <label htmlFor="lastName"></label>    
            <input type="text" value={this.state.lastName} name="lastName" 
            onChange={this.onChangeHandler} placeholder="Apellidos"/>
         </li>
         <li>
            <label htmlFor="email"></label>    
            <input type="text" value={this.state.email} name="email" 
            onChange={this.onChangeHandler} placeholder="Correo Electronico"/>
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
                  <option value="Distrito Federal">Distrito Federal</option>
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

         </li>
         <li>
         <input type='submit' value="Enviar Datos"/>

         </li>
         </ul>

         </form>
         </div>

         </section> //hasta aqui va bien

            );
   }
}
export default HumanRegister