import React, { useState } from 'react';
import './adoptView.scss';
import PreviewCard from './previewCard/previewCard';
import dogIcon from '../../assets/images/animal-icons/dog.png'
import catIcon from '../../assets/images/animal-icons/cat.png'
import rodentIcon from '../../assets/images/animal-icons/hamster.png'
import birdIcon from '../../assets/images/animal-icons/parakeet.png'

function AdoptView(props) {
    const originalPetList = props.petList;
    const [pets, setPets] = useState({data:[]});
    const [filter, setFilter] = useState({
        size:'',
        gender:'',
        sort: '',
        temperament: '',
        specialWord: ''
    });

    React.useEffect(() => {
        setPets({data: originalPetList})
    },[originalPetList]); 
    

    const handleChange = e => {
        setFilter({...filter, [e.target.name]: e.target.value})
        if(e.target.name === 'specialWord' ) {
            filterByWord(e.target.value);
        } else {
            filterByProperty(e.target.name, e.target.value)
        }
    }

    const handleLegendClick =() => {
        setPets({data:originalPetList});
        setFilter({
            size:'',
            gender:'',
            sort: '',
            temperament: '',
            specialWord: ''
        });
    }

    const filterByProperty = (property, value) => {
        let filterPetList;
        filterPetList = pets.data.filter(pet => 
            pet[property].toLowerCase() === value.toLowerCase()
        );

        if (filter[property] !== '') {
            filterPetList = originalPetList.filter(pet => 
                pet[property].toLowerCase() === value.toLowerCase()
            );
        }
        setPets({data:filterPetList})
    }

    const filterByWord = word => {
        let filterPetList;
        filterPetList = originalPetList.filter(pet => 
            pet.name.toLowerCase().includes(word.toLowerCase()) ||
            pet.sort.toLowerCase().includes(word.toLowerCase()) ||
            pet.breed.toLowerCase().includes(word.toLowerCase()) ||
            pet.size.toLowerCase().includes(word.toLowerCase()) ||
            pet.gender.toLowerCase().includes(word.toLowerCase()) ||
            pet.temperament.toLowerCase().includes(word.toLowerCase())
        );
        setPets({data:filterPetList})
    }

    return(
        <section className="dashboard"> 
            <div className="aside">
                <h3>Filta tu búsqueda</h3>
                <div className="search-input">
                    <input 
                        type="text" 
                        id="txtSerach" 
                        name="specialWord" 
                        placeholder="Algo en especial..."
                        value={filter.specialWord}
                        onChange = {handleChange}>
                    </input>
                    <button id="btnSerach" type="submit"><i className="fa fa-search"></i></button>
                </div>
                <div className="search-option">
                    <h3>Especie</h3>
                </div>
                <div className="pet-sort-container">
                    {/* sort */}
                    <label>
                        <input 
                            type="radio"
                            value="perro"
                            name="sort"
                            checked={filter.sort === "perro"}
                            onChange={handleChange}/>
                        <img 
                            src={dogIcon} 
                            className="animal-icon"
                            alt="perro"/>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            value="gato"
                            name="sort"
                            checked={filter.sort === "gato"}
                            onChange={handleChange}/>
                        <img 
                            src={catIcon} 
                            className="animal-icon"
                            alt="gato"/>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            value="roedor"
                            name="sort"
                            checked={filter.sort === "roedor"}
                            onChange={handleChange}/>
                        <img 
                            src={rodentIcon} 
                            className="animal-icon"
                            alt="roedor"/>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            value="ave"
                            name="sort"
                            checked={filter.sort === "ave"}
                            onChange={handleChange}/>
                        <img 
                            src={birdIcon} 
                            className="animal-icon"
                            alt="ave"/>
                    </label>
                </div>
                {/* size */}
                <div className="search-option">
                    <h3>Tamaño</h3>
                </div>
                <div className="radio-button-group">
                    <label className="radio">Mini
                        <input 
                            name="size"
                            type="radio"
                            value = "mini"
                            checked={filter.size === "mini"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>

                    <label className="radio">Chico
                        <input 
                            name="size"
                            type="radio"
                            value = "chico"
                            checked={filter.size === "chico"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>

                    <label className="radio"> Mediano
                        <input 
                            name="size"
                            type="radio"
                            value = "mediano"
                            checked={filter.size === "mediano"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>

                    <label className="radio">Grande
                        <input 
                            name="size"
                            type="radio"
                            value = "grande"
                            checked={filter.size === "grande"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>
                    <label className="radio">Gigante
                        <input 
                            name="size"
                            type="radio"
                            value = "gigante"
                            checked={filter.size === "gigante"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>
                </div>
              
                {/* gender */}
                <div className="search-option">
                    <h3>Género</h3>
                </div>
                <div className="radio-button-group">
                    <label className="radio">Hembra
                        <input 
                            name="gender"
                            type="radio"
                            value="hembra"
                            checked={filter.gender === "hembra"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>

                    <label className="radio">Macho
                        <input 
                            name="gender"
                            type="radio"
                            value="macho"
                            checked={filter.gender === "macho"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>
                </div>
                
                {/* temperament */}
                <div className="search-option">
                    <h3>Temperamento</h3>
                </div>
                <div className="radio-button-group">
                    <label className="radio">Tranquilo
                        <input 
                            name="temperament"
                            type="radio"
                            value="tranquilo"
                            checked={filter.temperament === "tranquilo"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>

                    <label className="radio">Activo
                        <input 
                            name="temperament"
                            type="radio"
                            value="activo"
                            checked={filter.temperament === "activo"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>

                    <label className="radio">Sociable
                        <input 
                            name="temperament"
                            type="radio"
                            value="sociable"
                            checked={filter.temperament === "sociable"}
                            onChange={handleChange}/>
                        <span className="checkround"></span>
                    </label>
                </div>
            </div>


            <div className="general-panel">
                <div className="filter-legend">
                    <span onClick={handleLegendClick}>Todos</span>
                </div>
                <div className="card-container">
                {
                    pets.data.map(pet=>{
                        return (
                            <PreviewCard {...pet} key={pet._id}/>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default AdoptView