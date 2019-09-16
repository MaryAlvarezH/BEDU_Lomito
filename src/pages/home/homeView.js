import React from 'react'
import './homeView.scss'
import imageAboutUs from '../../assets/images/portada4.jpg'
import imageStatistic from '../../assets/images/portada1.jpg'

function HomeView(props) {
    return(
        <div>
            <section id="hero">
                <div className="title-container">
                    <div className="title">
                            Ellos se merecen una segunda oportunidad
                    </div>
                </div>

                <div className="card-container">
                    <div className="card c1">
                        <i className="fa fa-search"></i>
                        <h3 className="font-theme">Busca</h3>
                        <span>Busca lomitos de acuerdo a tos gustos ó déjanos hacerlo por ti.</span>
                    </div>
                    <div className="card c2">
                        <i className="fa fa-paw"></i>
                        <h3 className="font-theme">Adopta</h3>
                        <span>Pegunta lo que quieras al dueño, siéntete seguro de tu decisión.</span>
                    </div>
                    <div className="card">
                        <i className="fa fa-home"></i>
                        <h3 className="font-theme">Encuentra hogar</h3>
                        <span>Encuentra un nuevo hogar para él publicando su perfil.</span>
                    </div>
                </div>
            </section>
            <section className="about-us">
                <div className="about-us-image">
                    <img src={imageAboutUs}/>
                </div>
                <div className="about-us-details">
                    <h1 className="font-theme">Acerca de nosotros</h1>
                        <p>Lomito es un sitio dedicado a las mascotas que necesitan un nuevo hogar. 
                        <br/>
                        El cual ayuda tanto a los actuales dueños como a los posibles adoptantes a llegar a este fin de una manera informada, fácil y rápida.
              
                        </p>
                        <span>"Salvar un animal no cambiará el mundo pero si cambiará el de él"</span>
                </div>
            </section>
            <section className="tools">
                <div className="tool-item">
                    <div className="tools-icon" tabIndex="0">
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="tools-details">
                        <span>Busqueda abierta</span>
                        <p>Personaliza tu busqueda con filtros</p>
                    </div>
                </div>

                <div className="tool-item">
                    <div className="tools-icon">
                        <i className="fas fa-project-diagram"></i>
                    </div>
                    <div className="tools-details">
                        <span>Busqueda inteligente</span>
                        <p>Responde unas preguntas y nuestro algoritmo se encargará del resto</p>
                    </div>
                </div>

                <div className="tool-item">
                    <div className="tools-icon">
                        <i className="fa fa-tasks"></i>
                    </div>
                    <div className="tools-details">
                        <span>Perfilar mascota</span>
                        <p>Si buscas un hogar para tu mascota, sube su perfil, así las personas podrán conocerlo</p>
                    </div>
                </div>
            
                <div className="tool-item">
                    <div className="tools-icon">
                        <i className="fa fa-comments"></i>
                    </div>
                    <div className="tools-details">
                        <span>Contacto</span>
                        <p>Resuelve dudas usando los comentarios en el perfil de la mascota</p>
                    </div>
                </div>
            </section>
            <section className="statistics">
                <div className="statistics-item">
                <img src={imageStatistic} width="350px" height="120px"/>
                    <div className="detail">
                        <span>28 000 000</span>
                        <p>De perros y gatos en México</p>
                    </div>
                </div>
                <div className="statistics-item">
                <img src={imageStatistic} width="350px" height="120px"/>
                    <div className="detail">
                        <span>70%</span>
                        <p>Se encuentran en situación de calle</p>
                    </div>
                </div>
                <div className="statistics-item">
                <img src={imageStatistic} width="350px" height="120px"/>
                    <div className="detail">
                        <span>35%</span>
                        <p>Encuentran un nuevo hogar</p>
                    </div>
                </div>
            </section>
        </div>
       
    )
}

export default HomeView