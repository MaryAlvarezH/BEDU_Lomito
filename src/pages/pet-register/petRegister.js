import React,{ Component }  from 'react'
import { axiosInstance } from '../../shared/helpers'
import './pet-register.scss'
import {NavLink} from 'react-router-dom'


class PetRegister extends Component {
    state ={     
        name: '',
        sort: '',
        gender: '',
        breed: '',
        size: '',
        temperament: '',
        age_number:'',
        age_timePeriod:'',
        hometown: '',
        skills: [''],
        observations: [''],
        ownerId:'5db7b1b06b4c2000179a0939',
        petImage: null,
        petImageLink: null,
        petId: null
    }


    onSubmitHandler = async (evt) => {
        evt.preventDefault();
        try {
            const {data} = await axiosInstance.post('pets/add-pet',this.state)
            if (data && data._id) {
                this.setState({petId: data._id});
            }
        } 
        catch(err) {
            console.log(err)
        }             
    }

    onChangeHandler = (evt) => {
        const {name, value} = evt.target
        this.setState({[name]: value})
    }
   
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        this.setState({petImage: event.target.files[0]});
    }
   
    fileUploadHandler = async() => {
        const formData = new FormData();
        formData.append('id', this.state.petId) // cambiar este valor por un pet._id valido 
        formData.append('image', this.state.petImage, this.state.petImage.name,formData);
        try {
            const {data} = await axiosInstance.post(`pets/load-image`,formData)
            console.log('image',data.imageURL);
            if (data && data.imageURL) {
                this.setState({petImageLink: data.imageURL});
            }
            return data;
            
        } catch (error) {
            console.log('error',error)
        }
    }

    render() { 
        return (
            <section>
            <div className="container-pet">
                <div className="flat-form-lomito">
                    <h2>Registra una mascosta</h2>
                    <p> Este es el Registro único y más importante, ya que
                        son los datos recopilados de la mascota que se encuentra en busqueda de un hogar.
                    </p>
                    <form>
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
                                placeholder="Raza"/> 
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
                                
                            <li className="group">
                                <label className="legend-age">Edad:</label>
                                <label htmlFor="age_number" className="number-input"/>
                                <input 
                                    type="number" 
                                    min='1' 
                                    max='16' 
                                    value={this.state.age_number}  
                                    name="age_number" 
                                    onChange={this.onChangeHandler}
                                    placeholder="Número"
                                    className="select-number"/>

                            <label htmlFor="age_timePeriod"/>
                                <select name="age_timePeriod" 
                                    value={this.state.age_timePeriod}
                                    onChange={this.onChangeHandler}>
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
                                placeholder="Ubicación actual"
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
                            </li>
                        </ul>
                        {
                        this.state.petImageLink !==null &&
                        <div className="pet-profile">
                            <img src={this.state.petImageLink} alt="Perfil"></img>
                            <NavLink className="legend-link" exact to={`/pet-detail?id=${this.state.petId}`}>Ver Perfil</NavLink>
                        </div>  
                        }
                    </form>

                    <div className="buttons-container">
                        {
                            this.state.petId === null &&
                            <div className="group-actions">
                                <input type="submit" onClick={this.onSubmitHandler} value="Guardar datos" className="btn-send"/>
                            </div>
                        }
                        {
                            this.state.petId !== null && this.state.petImageLink === null &&
                            <div className="image-container">
                                  <span className="legend-success">Guardado exitoso</span><span className="legend-advice">es recomendable subir una imagen</span>
                                  <div className="group-actions-big">
                                    <input type="file" name="petImage" className="petImage" onChange={this.fileSelectedHandler} />
                                    {
                                        this.state.petImage && this.state.petId &&
                                        <button className="btn" onClick={this.fileUploadHandler} className="btn-send">Subir imagen</button>
                                    }
                                </div>   
                            </div>
                        }
                    </div>
                </div>

            </div>
        </section>
        );

        
    }
}
export default PetRegister