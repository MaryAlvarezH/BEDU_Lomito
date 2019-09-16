import React  from 'react'
import './human-register.scss'


class HumanRegister extends React.Component{
constructor(props){
   super(props);
   this.state = {
   Nombres:'',
   Apellidos:'',
   date:'',
   Email:'',
   Contraseña:'',
   ConfirmarContraseña:'',
   Telefono:'',
   Direccion:'',
   CodigoPostal:'',
   Estado:''

   };
   this.guardarInfo = this.guardarInfo.bind(this);
   this.procesar = this.procesar.bind(this);
   this.Nombres = this.Nombres.bind(this);
   this.Apellidos = this.Apellidos.bind(this);
   this.date = this.date.bind(this);
   this.Email = this.Email.bind(this);
   this.Contraseña = this.Contraseña.bind(this);
   this.ConfirmarContraseña = this.ConfirmarContraseña.bind(this);
   this.Telefono = this.Telefono.bind(this);
   this.Direccion = this.Direccion.bind(this);
   this.CodigoPostal = this.CodigoPostal.bind(this);
   this.Estado = this.Estado.bind(this);
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
        <form onSubmit ={this.procesar}>
<ul className="tabs">
   <li>
<label htmlFor="Nombres"></label>    
<input type="text" value={this.state.Nombres} onChange={this.Nombres} placeholder="Nombres"></input>
   </li>
   <li>
<label htmlFor="Apellidos"></label>    
<input type="text" value={this.state.Apellidos} onChange={this.Apellidos} placeholder="Apellidos"></input>
   </li>
   <li>

<label htmlFor="date"></label>          
<input type="date" value={this.state.date} onChange={this.date}placeholder="date"></input>
   </li>
   <li>
<label htmlFor="Email"></label>    
<input type="text" value={this.state.Email} onChange={this.Email} placeholder="Correo Electronico"></input>
   </li>
   <li>
<label htmlFor="contraseña" ></label>    
<input type="password" value={this.state.Contraseña} onChange={this.Contraseña} placeholder="Contraseña"></input>
   </li>
   <li>
<label htmlFor="Confirmar contraseña"></label>    
<input type="password" value={this.state.ConfirmarContraseña} onChange={this.ConfirmarContraseña} placeholder="Confirmar contraseña"></input>
   </li>
   <li>
<label htmlFor="Telefono"></label>          
<input type="text" value={this.state.Telefono} onChange={this.Telefono} placeholder="Telefono"></input>
   </li>
   <li>
<label htmlFor="Direccion"></label>    
<input type="text" value={this.state.Direccion} onChange={this.Direccion} placeholder="Dirección"></input>
   </li>
   <li>
<label htmlFor="Codigo postal"></label>    
<input type="text" value={this.state.CodigoPostal} onChange={this.CodigoPostal} placeholder="Codigo Postal"></input>
   </li>
   <li>
<label htmlFor="estado"></label>    
<select value={this.state.Estado} onChange={this.Estado} placeholder="estado">
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
<label htmlFor="foto"></label>    
   
       foto de perfil
   
<input type="file" name="imagen subida" 
accept="image/png,.jpg,.jpeg,image/gif"></input>
</li>
<li>
<input type='submit'/>

</li>
</ul>

</form>
</div>

<div>

<button className="button-2"> Inscribirse</button>
</div>
</section> //hasta aqui va bien

    );
   }
guardarInfo(){
   fetch('http://localhost:4001/users',{
      method:'POST',
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
   }) .then(console.log).catch(console.error)
}



procesar(e){
   e.preventDefault();
   /*alert('Registro Completado'+ this.state.Nombres +''
                 + this.state.Apellidos +''
                 + this.state.date + '' 
                 + this.state.Email + '' 
                 + this.state.Contraseña +''
                 + this.state.ConfirmarContraseña +''
                 + this.state.Telefono +''
                 + this.state.Direccion+ '' 
                 + this.state.CodigoPostal+''
                 + this.state.Estado
                 
                 )*/
      this.guardarInfo()           
}
Nombres(e){
   this.setState({
      Nombres: e.target.value
   })
}
Apellidos(e){
   this.setState({
      Apellidos: e.target.value
      })
    }
date(e){
   this.setState({
      date:e.target.value
   })
}
Email(e){
   this.setState({
      Email: e.target.value
   })
}

Contraseña(e){
   this.setState({
      Contraseña: e.target.value
   })
}
ConfirmarContraseña(e){
   this.setState({
      ConfirmarContraseña:e.target.value
   })
}
    
Telefono(e){
   this.setState({
      Telefono:e.target.value
   })
}

Direccion(e){
   this.setState({
      Direccion:e.target.value
   })
}

CodigoPostal(e){
   this.setState({
      CodigoPostal: e.target.value
   })
}
Estado(e){
   this.setState({
      Estado:e.target.value
   })
}
 }


export default HumanRegister