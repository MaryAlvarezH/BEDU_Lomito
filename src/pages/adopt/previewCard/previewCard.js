import React from 'react'
import {Link} from 'react-router-dom'
import './previewCard.scss'
import imageDefault from '../../../assets/images/pet-default.png'

function PreviewCard(props) {
    return(
        <Link 
        to={{
            pathname:'/pet-detail',
            search: `?id=${props._id}`,
            state: { ...props,
                fromPreview: true,
            },
        }}
       
        className="card-link">
            <div className="card-pet">
            <h2 className="pet-name">{props.name}</h2>
               { props.imageURL && <img className="item-image" alt="lomito" src={props.imageURL}></img>}
               { !props.imageURL && <img className="item-image default" alt="lomito" src={imageDefault}></img>}
            <div className="pet-details">
                <div className="item">Especie:</div>
                <div className="item-detail">{props.sort}</div>
                <div className="item">Genero:</div>
                <div className="item-detail">{props.gender}</div>
                <div className="item">Tamaño:</div>
                <div className="item-detail">{props.size}</div>
                <div className="item">Temperamento:</div>
                <div className="item-detail">{props.temperament}</div>
                <div className="item">Edad:</div>
                {
                    props.age && props.age.number && props.age.timePeriod &&
                    <div className="item-detail age">
                        {`${props.age.number} ${props.age.timePeriod === "mes" && props.age.number>1 ? "meses" : 
                                             `${props.age.timePeriod === "mes" && props.age.number<=1 ? "mes" :
                                             `${props.age.timePeriod === "año" && props.age.number>1 ? "años" :
                                             `${props.age.timePeriod === "año" && props.age.number<=1 ? "año" : ''
                                             }`}`}`}`}
                    </div>
                }
            </div>
            <button className="card-pet-more" type="submit">Conocer</button>
            </div>
        </Link>
    )
}

export default PreviewCard;