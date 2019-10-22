import React, { useState, Component, Fragment } from 'react';
import './adoptView.scss';
import PreviewCard from './previewCard/previewCard';
import dogIcon from '../../assets/images/animal-icons/dog.png'
import catIcon from '../../assets/images/animal-icons/cat.png'
import hamsterIcon from '../../assets/images/animal-icons/hamster.png'
import parakeetIcon from '../../assets/images/animal-icons/parakeet.png'


function AdoptView(props) {
    const originalPetList = props.petList;
    const [pets, setPets] = useState({data:[]});
    const [filter, setFilter] = useState({
        size:'',
        gender:'',
        sort: ''
    });

    React.useEffect(() => {
        console.log('effect', originalPetList)
        setPets({data: originalPetList})
    },[originalPetList]); 
    

    const handleChange = e => {
        setFilter({...filter, [e.target.name]: e.target.value})
        filterByProperty(e.target.name, e.target.value)
    }

    const handleClick = e => {
        setFilter({...filter, sort: e.target.name})
        filterByProperty('sort', e.target.name)
    }
    
    const filterByProperty = (property, value, singleFilter) => {
        console.log('property',property,'value',value)
        let filterPetList = pets.data.filter(pet => 
            pet[property].toLowerCase() == value.toLowerCase()
        );
        setPets({data:filterPetList})
    }

    return(
      
        <section className="dashboard"> 
            <div className="aside">
                <h3>Filta tu búsqueda</h3>
            
                <div className="search-input">
                    <input type="text" id="txtSerach" placeholder="Algo en especial..." id="item1"></input>
                    <button id="btnSerach" type="submit"><i className="fa fa-search"></i></button>
                </div>
                <div className="search-option">
                    <h3>Especie</h3>
                </div>
                <div className="icon-container">
                    <input 
                        type="radio"
                        value ="perro"
                        name="sort"
                        checked={filter.sort === "perro"}
                        onClick={handleChange}/>
                    <label><img 
                        src={dogIcon} 
                        className="animal-icon"
                        value ="perro"
                        /></label>
                   <input 
                        type="radio"
                        value ="gato"
                        name="sort"
                        checked={filter.sort === "gato"}
                        onClick={handleChange}/>
                    <label><img 
                        src={catIcon} 
                        className="animal-icon"/>
                    </label>
                   
                    <img 
                        src={hamsterIcon} 
                        className="animal-icon"
                        name="hamster"
                        onClick={handleClick}/>
                    <img 
                        src={parakeetIcon} 
                        className="animal-icon"
                        name="ave"
                        onClick={handleClick}/>
                </div>
                {/* size */}
                <div className="search-option">
                    <h3>Tamaño</h3>
                </div>
                <div className="radio-button-group">
                    <input 
                        id = "mini"
                        name="size"
                        type="radio"
                        value = "mini"
                        checked={filter.size === "mini"}
                        onChange={handleChange}/>
                    <label htmlFor="mini">Mini</label>
                </div>
                <div className="radio-button-group">
                    <input 
                        id="small"
                        name="size"
                        type="radio"
                        value = "chico"
                        checked={filter.size === "chico"}
                        onChange={handleChange}/>
                    <label htmlFor="small">Chico</label>
                </div>
                <div className="radio-button-group">
                    <input 
                        id="medium"
                        name="size"
                        type="radio"
                        value = "mediano"
                        checked={filter.size === "mediano"}
                        onChange={handleChange}/>
                    <label htmlFor="medium">Mediano</label>
                </div>
                <div className="radio-button-group">
                    <input 
                        id="big"
                        name="size"
                        type="radio"
                        value = "grande"
                        checked={filter.size === "grande"}
                        onChange={handleChange}/>
                    <label htmlFor="big">Grande</label>
                </div>
                <div className="radio-button-group">
                    <input 
                        id="giant"
                        name="size"
                        type="radio"
                        value = "gigante"
                        checked={filter.size === "gigante"}
                        onChange={handleChange}/>
                    <label htmlFor="giant">Gigante</label>
                </div>
                 {/* gender */}
                <div className="search-option">
                    <h3>Género</h3>
                </div>
                <div className="radio-button-group">
                    <input 
                        id="female"
                        name="gender"
                        value="hembra"
                        checked={filter.gender === "hembra"}
                        onChange={handleChange}
                        type="checkbox" />
                    <label htmlFor="female">Hembra</label>
                </div>
                <div className="radio-button-group">
                    <input 
                        id="male"
                        name="gender"
                        value="macho"
                        checked={filter.gender === "macho"}
                        onChange={handleChange}
                        type="checkbox"/>
                    <label htmlFor="male">Macho</label>
                </div>
                <div className="search-option">
                    <h3>Temperamento</h3>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="tranquilo"/>
                    <label htmlFor="tranquilo">Tranquilo</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="Activo"/>
                    <label htmlFor="Activo">Activo</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="sociable"/>
                    <label htmlFor="sociable">Sociable</label>
                </div>
            
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
           
        </section>
    )
}

export default AdoptView

// class AdoptView extends Component {

//     constructor(props) {
//         super(props) 

//         this.state = {
//             radio1: "apple"
//         }

//         this.onRadioChange = this.onRadioChange.bind(this)
//     }
//     onRadioChange(e) {
//         console.log(e.target.value)
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     render () {
//         return (
//             <div>
//                 <input 
//                 type="radio"
//                 name="radio1"
//                 value="apple"
//                 checked = {this.state.radio1 === "apple"}
//                 onChange={this.onRadioChange}
//                 />Apple
//             <br/>
//                 <input 
//                 type="radio"
//                 name="radio1"
//                 value = "orange"
//                 checked = {this.state.radio1 === "orange"}
//                 onChange={this.onRadioChange}
//                 /> Orange 
//             <br/>
//             </div>
//         )
//     }
// }

// export default AdoptView