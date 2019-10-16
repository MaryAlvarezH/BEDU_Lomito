import React  from 'react'
import './pet-register.scss'

class petRegister extends React.Component{
    constructor(props){
       super(props);
       this.state = {
      //  LomitoName:'',
      //  LomitoDate:'',
      //  LomitoDisease:'',
      //  LomitoSurgery:'',
      //  YearsWithyou:'',
      //  AnimalEnergy:'',
      //  HumanFriendly:'',
      //  Specie:'',
      //  LomitoGender:'',
      //  LomitoSize:''
      name: String,
      sort: String,
      gender: String,
      breed: String,
      size: String,
      temperament: String,
      age: {
          type: {
              number: Number,
              timePeriod: String,
          }
      },
      hometown: String,
      skills: [],
      observations: [],
      ownerId: {
          type: /*ObjectId*/'',
          ref: 'User'
      },
      status: {
          type: String,
          default: 'active'
      }
  
    
       };
        this.guardarInfo = this.guardarInfo.bind(this);
        this.name = this.name.bind(this);
        this.sort = this.sort.bind(this);
        this.gender = this.gender.bind(this);
        this.breed = this.breed.bind(this);
       this.size = this.size.bind(this);
       this.temperament = this.temperament.bind(this);
       this.age = this.age.bind(this);
       this.hometown = this.hometown.bind(this);
       this.skills = this.skills.bind(this);
       this.observations = this.observations.bind(this);
       this.ownerId = this.ownerId.bind(this);
      

      //this.guardarInfo = this.guardarInfo.bind(this);
      //  this.procesar = this.procesar.bind(this);
      //  this.LomitoName = this.LomitoName.bind(this);
      //  this.LomitoDate = this.LomitoDate.bind(this);
      //  this.LomitoDisease = this.LomitoDisease.bind(this);
      //  this.LomitoSurgery = this.LomitoSurgery.bind(this);
      //  this.temperament = this.YearsWithyou.bind(this);
      //  this.AnimalEnergy = this.AnimalEnergy.bind(this);
      //  this.HumanFriendly = this.HumanFriendly.bind(this);
      //  this.Specie = this.Specie.bind(this);
      //  this.LomitoGender = this.LomitoGender.bind(this);
      //  this.LomitoSize = this.LomitoSize.bind(this);



    }
    
    //Formularios de los lomitos
       render(){
          return(
          <section className="container-pet">
          <div className="flat-form-lomito">
             <h2>Registro Lomito</h2>
             <p> Este es el Registro único más importante, ya que
                son los datos recopilados del lomito que se dara en adopción.
                Esta información es importante para otros Humanos.
             </p>
         <form onSubmit ={this.procesar}>
         <ul className="tabs-Lomito">
            <li>
               <label htmlFor="LomitoName"/>
               <input type="text" value={this.state.name} 
               onChange={this.name} 
               placeholder="Nombre del Lomito"/>
            </li>
            <li>
               <label htmlFor="LomitoDate"/>
               <input type="date" value={this.state.sort}
               onChange={this.sort}
               placeholder="Fecha de nacimiento del Lomito"/>
            </li>
            <li>
               <label htmlFor="LomitoDisease"/>
               <input type="text" value={this.state.gender}
               onChange={this.gender}
               placeholder="¿Tu lomito ha estado enfermo de algo, o padece una enfermedad cronica? Especifica"/>
            </li>
            <li>
               <label htmlFor="LomitoSurgery"/>
               <input type="text" value={this.state.breed}
               onChange={this.breed}
               placeholder="¿Tu lomito ha tenido alguna cirugia en su vida? Especifica"/> 
            </li>
            <li>
               <label htmlFor="YearsWithyou"/>
               <input type="text" value={this.state.YearsWithyou}
               onChange={this.YearsWithyou}
               placeholder="¿Hace cuanto tiempo que tu lomito ha vivido contigo"/>
            </li>
            <li>
               <label htmlFor="WithOthersAnimals"/>
               <input type="text" value={this.state.temperament}
               onChange={this.temperament} 
               placeholder="¿Tienes algun otro lomito en casa? Especifica" />
            </li>
            <li>
               <label htmlFor="AnimalEnergy"/>
               <input type="text" value={this.state.AnimalEnergy}
               onChange={this.AnimalEnergy}
               placeholder="¿Qué nivel de energia tiene tu lomito? Tranquilo, alta, etc.."/>


            </li>
            
            <li>
         
               <label htmlFor="HumanFriendly"/>
               <select value={this.state.HumanFriendly}
               onChange={this.HumanFriendly}
               placeholder="Amigo de humanos">
                  <option value="default">¿Tu lomito es Amigable con otros humanos?</option>
                  <option value="si">si</option>
                  <option value="no">no</option>
               </select>
            
            </li>
            <li>
                  <label htmlFor="Specie" />
                  <select value={this.state.Specie}
                  onChange={this.Specie}
                  placeholder="Especie de lomito">
                  <option value="Default">Especie de tu Lomito</option>   
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>   
                  <option value="Roedor">Roedor</option>   
                  <option value="Reptil">Reptil</option>
                  <option value="Anfibio">Anfibio</option>
                  <option value="Pez">Pez</option>
                  <option value="Ave">Ave</option>                     
                  <option value="Otro">Otro</option>   
               
                  </select>

            </li>

            
            
            
            <li>
               <label htmlFor="LomitoGender"/>
               <select value={this.state.gender}
               onChange={this.gender}
               placeholder="Genero">
                  <option value="no">Genero</option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
               </select>
            </li>
            
            
            
            
            
            <li>
               <label htmlFor="LomitoSize"/>
               <select value ={this.state.size}
               onChange={this.size}
               placeholder="Tamaño">
               <option value="Mini">Mini (hasta 5kg)</option>
               <option value="Chico">Chico (6-10kg)</option>
               <option value="Mediano">Mediano (11-25kg)</option>
               <option value="Grande">Grande (26-35kg)</option>
               <option value="Gigante">Gigante (más de 36kg)</option>
               </select>
            </li>
            <li>
               <label htmlFor="uploadInfo"/>
               <input type="submit" value="Enviar Datos"/>
            </li>

         </ul>
         </form>         
             </div>
          </section>  
        );
       }



//Funcion para el Guardado de la Info

    guardarInfo(){
       fetch('https://lomito-server.herokuapp.com/api/add-pet',{
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
    name(e){
       this.setState({
          name: e.target.value
       })
    }
    sort(e){
       this.setState({
          sort: e.target.value
          })
        }
   gender(e){
       this.setState({
          gender:e.target.value
       })
    }
    breed(e){
       this.setState({
          breed: e.target.value
       })
    }
    
    size(e){
       this.setState({
          size: e.target.value
       })
    }
    temperament(e){
       this.setState({
          temperament:e.target.value
       })
    }
        
    age(e){
       this.setState({
          age:e.target.value
       })
    }
    
    hometown(e){
       this.setState({
          hometown:e.target.value
       })
    }
    
    skills(e){
       this.setState({
          skills: e.target.value
       })
    }
    observations(e){
       this.setState({
          observations:e.target.value
       })
    }
    ownerId(e){
      this.setState({
         ownerId:e.target.value
      })
   }
     }
    
     export default petRegister