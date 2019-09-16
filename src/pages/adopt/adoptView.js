import React from 'react'
import './adoptView.scss'
import PreviewCard from './previewCard/previewCard';
function AdoptView(props) {
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
                    <i className="fas fa-dog fa-3x"></i>
                    <i className="fas fa-cat fa-3x"></i>
                </div>
                <div className="search-option">
                    <h3>Tamaño</h3>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="chico"/>
                    <label htmlFor="chico">Chico</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="mediano"/>
                    <label htmlFor="mediano">Mediano</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="grande"/>
                    <label htmlFor="grande">Grande</label>
                </div>
                <div className="search-option">
                    <h3>Género</h3>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="hembra"/>
                    <label htmlFor="hembra">Hembra</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="macho"/>
                    <label htmlFor="macho">Macho</label>
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
                props.petList.map(pet=>{
                    return (
                        <PreviewCard {...pet} key={pet.id}/>
                    )
                })
            }
            </div>
           
        </section>
    )
}

export default AdoptView