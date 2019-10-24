import React  from 'react'
import './pet-register.scss'
//import PetRegister from './petRegister'

const PetRegisterView =() => (
    //lomito's form
    <section className="container-pet">
    <div className="flat-form-lomito">
    <h2>Registro Lomito</h2>
    <p> Este es el Registro único más importante, ya que
        son los datos recopilados del lomito que se dara en adopción.
        Esta información es importante para otros Humanos.
    </p>
<form onSubmit ={this.onSubmitHandler}> {/*cambiar el nombre*/}
<ul className="tabs-Lomito">
    <li>
    <label htmlFor="name"/>
    <input type="text"  value={this.state.name} name="name" 
    onChange={this.onChangeHandler} 
    placeholder="Nombre del Lomito"/>
    </li>
    <li>
    <label htmlFor="age"/>
    <input type="date" value={this.state.age} name="age" 
    onChange={this.onChangeHandler}
    placeholder="Fecha de nacimiento del Lomito"/>
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
    <label htmlFor="temperament"/>
    <input type="text" value={this.state.temperament} name="temperament" 
    onChange={this.onChangeHandler} 
    placeholder="¿Como es el temperamento de tu Lomito?" />
    </li>
    <li>
    <label htmlFor="skills"/>
    <input type="text" value={this.state.skills} name="skills"
    onChange={this.onChangeHandler}
    placeholder="¿Qué habilidades tiene tu lomito?"/>


    </li>

    <li>
        <label htmlFor="sort" />
        <select name="sort" 
        value={this.state.sort}
        onChange={this.onChangeHandler}
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
    <label htmlFor="observations"/>
    <select name="observations"
    value={this.state.observations} 
    onChange={this.onChangeHandler}
    placeholder="Genero">
        <option value="no">Genero</option>
        <option value="Macho">Macho</option>
        <option value="Hembra">Hembra</option>
    </select>
    </li>

    
    <li>
    <label htmlFor="size"/>
    <select  name="size" 
    value={this.state.size}
    onChange={this.onChangeHandler}
    placeholder="Tamaño">
    <option value="Mini">Mini (hasta 5kg)</option>
    <option value="Chico">Chico (6-10kg)</option>
    <option value="Mediano">Mediano (11-25kg)</option>
    <option value="Grande">Grande (26-35kg)</option>
    <option value="Gigante">Gigante (más de 36kg)</option>
    </select>
    </li>
    <li>
    <button className="btn">Upload a file</button>
    <input type="file" name="myfile" />
    </li>
    <li>
    <label htmlFor="uploadInfo"/>
    <input className="btnAddPet" type="submit" value="Enviar Datos"/>
    </li>

</ul>
</form>         
    </div>
 </section> 
)

export default PetRegisterView