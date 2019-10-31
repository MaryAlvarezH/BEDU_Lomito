
////////////////////////////////////////////////////////////////

import React,{ Component }  from 'react'
import './pet-register.scss'
//import PetRegisterView from './PetRegisterView'
import axios from 'axios';

class PetRegister extends Component {
    state ={
       petDetails:{     
        name: '',//x
        sort: '',//x
        gender: '',//x
        breed: '',//x
        size: '',//x
        temperament: '',//x
        age_number:'',//x
        age_timePeriod:'',//x
        hometown: '',//x
        skills: ['',''],//x
        observations: ['']//x
        //ownerId:''
        //selectedFile:null
        },
    //dataImg = null
    petImage:null
    }


    // onSubmitHandler = async (evt) => {
    //     evt.preventDefault();
    //     //console.log(this.state);
    //     try {
    //        const result = await axios({
    //           method:'POST',
    //           //url: 'https://lomito-server.herokuapp.com/api/auth/signup',
    //           //url: 'http://localhost:4001/users',
    //           url: 'http://localhost:3000/api/pets/add-pet',
    //           data: this.state
    //        })
    //  } catch(err) {console.log(err)}
           
    //  }

    //   onChangeHandler = (evt) => {
    //      const {name, value} = evt.target
    //      this.setState({
    //      [name]: value
    //      })
    //      console.log(evt)
    //   }

    //   onChangeHandlerImg = (evt) => {
    //     // const imagePet = document.getElementsByClassName("imagePet")
    //     console.log("img event ", evt.target );
    //     // const {name, value} = evt.target
    //     // this.setState({
    //     // [name]: value
    //     // })
    //     const imgPet = evt.target.files;
    //     console.log(evt.target.files);
    //     let formData = new FormData();
    //     formData.append('File', imgPet);
    //     console.log("img event fromData ", formData);
    //     this.dataImg = imgPet;
    //     console.log("igm event imget", imgPet)

        // imagePet.addEventListener('change', async (e) => {
        //         //     // console.log(e);
        //         //     const file = e.target.files[0];
        //     let formData = new FormData();
        //     formData.append('File', imgPet);
        //     this.dataImg = formData;
        //     console.log("img event fromData ", formData);
        // })
        onSubmitHandler = async (evt) => {
            evt.preventDefault();
           //  console.log(this.state);s
           console.log('data', this.state.petDetails)
           try {
               const result = await axios({
                   method:'POST',
                   // url: 'https://lomito-server.herokuapp.com/api/pets/add-pet',
                   url: 'http://localhost:3000/api/pets/add-pet',
                   //data: this.state.petDetails.petDetails
                   data: this.state
               })
   } catch(err) {console.log(err)}
            
         }


         onChangeHandler = (evt) => {
            const {name, value} = evt.target
            this.setState({
            [name]: value
            })
            //console.log(evt)
         }
   
         fileSelectedHandler = event => {
             console.log(event.target.files[0]);
             this.setState({petImage: event.target.files[0]});
           
         }
   
         fileUploadHandler = () => {
           const formData = new FormData();
           formData.append('id', '5db4eb66997189124f728551') // cambiar este valor por un pet._id valido 
           formData.append('image', this.state.petImage, this.state.petImage.name,formData);
           try {
               const {data} = axios.post(`http://localhost:3000/api/pets/load-image`,formData)
               return data;
               
           } catch (error) {
               console.log('error',error)

     }

    } 
    
      render() { 
         return (
         //<PetRegisterView/>
         <section className="container-pet">
            <div className="flat-form-lomito">
                <h2>Registra una mascosta</h2>
                <p> Este es el Registro único y más importante, ya que
                    son los datos recopilados de la mascota que se encuentra en busqueda de un hogar.
                    Esta información es importante para su futuro amigo.
                </p>
                <form onSubmit ={this.onSubmitHandler}> {/*cambiar el nombre*/}
                    <ul className="tabs-Lomito">
                        <li>
                            <label htmlFor="name"/>
                            <input type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.onChangeHandler} 
                            placeholder="Nombre del Lomito"/>
                        </li>
                        <li>
                            <label htmlFor="sort" />
                            <select name="sort" 
                            value={this.state.sort}
                            onChange={this.onChangeHandler}
                            placeholder="Especie de lomito">
                                <option value=" ">Especie de tu Lomito</option>   
                                <option value="Perro">Perro</option>
                                <option value="Gato">Gato</option>   
                                <option value="Roedor">Roedor</option>   
                                <option value="Ave">Ave</option>                     
                                  
                        
                            </select>
                        </li>
                        <li>
                            <label htmlFor="gender"/>
                            <select name="gender"
                            value={this.state.gender} 
                            onChange={this.onChangeHandler}
                            placeholder="Genero">
                                <option value="no" >Genero</option>
                                <option value="Macho">Macho</option>
                                <option value="Hembra">Hembra</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="breed"/>
                            <input 
                            type="text" 
                            value={this.state.breed} 
                            name="breed"
                            onChange={this.onChangeHandler}
                            placeholder="¿Tu lomito ha tenido alguna cirugia en su vida? Especifica"/> 
                        </li>
                        <li>
                            <label htmlFor="size"/>
                            <select  name="size" 
                            value={this.state.size}
                            onChange={this.onChangeHandler}
                            placeholder="Tamaño">
                                <option value=''>Tamaño de tu Lomito</option>
                                <option value="Mini">Mini (hasta 5kg)</option>
                                <option value="Chico">Chico (6-10kg)</option>
                                <option value="Mediano">Mediano (11-25kg)</option>
                                <option value="Grande">Grande (26-35kg)</option>
                                <option value="Gigante">Gigante (más de 36kg)</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="temperament"/>
                            <select type="text" value={this.state.temperament} name="temperament" 
                            onChange={this.onChangeHandler} 
                            placeholder="¿Como es el temperamento de tu Lomito?" >
                                <option value=''>Temperamento de tu lomito?</option>
                                <option value="Tranquilo">Tranquilo</option>
                                <option value="Activo">Activo</option>
                                <option value="Sociable">Sociable</option>
                            </select>
                        </li>
                            
                            <li>
                            <label htmlFor="age_number"/>
                            <input type="number" min='1' max='16' value={this.state.age_number}  name="age_number" 
                            onChange={this.onChangeHandler}
                            placeholder="Fecha de nacimiento del Lomito"/>
                            </li>

                            <li>
                            <label htmlFor="age_timePeriod"/>
                            <select  name="age_timePeriod" 
                            value={this.state.age_timePeriod}
                            onChange={this.onChangeHandler}
                            >
                            <option value="">Meses o años?</option>    
                            <option value="mes">Meses</option>
                            <option value="año">Años</option>
                            </select>
                            </li>

                        <li>
                            <label htmlFor="hometown"/>
                            <input type="text" name="hometown" 
                            value={this.state.hometown}
                            onChange={this.onChangeHandler}
                            placeholder="¿Cual es su hogar actual?"
                            />
                        </li>
                        <li>
                            <label htmlFor="skills"/>
                            <input type="text" value={this.state.skills} name="skills"
                            onChange={this.onChangeHandler}
                            placeholder="¿Qué habilidades tiene tu lomito?"/>
                        </li>
                        <li>
                            <label htmlFor="observations"/>
                            <input type="text" name="observations" 
                            value={this.state.observations}
                            onChange={this.onChangeHandler}
                            placeholder="Observaciones"
                            />
                        </li>

                        <li>
                            {/* <button className="btn" value="imagePet">Upload a file</button> */}
                            <input type="file" className="imagePet" 
                            name="imagePet"
                            accept = "image/*" 
                            //value = {this.stateImgPet.imagePet} 
                            onChange={this.onChangeHandlerImg}
                            />
                            <progress className = "imagePetBar" value = "0" max = "100" />
                        </li>
                        <li>
                            {/* <label htmlFor="uploadInfo"/> */}
                            <input className="btnAddPet" type="submit" value="Enviar Datos"/>
                        </li>
                    </ul>
                </form>         
            </div>
         </section>
         );
 
         
      }
}
export default PetRegister