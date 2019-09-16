import React from 'react'
import {Link} from 'react-router-dom'
import './previewCard.scss'

function PreviewCard(props) {
    return(
        <Link 
        to={{
            pathname:'/pet-detail',
            search: `?id=${props.id}`,
            state: { ...props,
                fromPreview: true,
               
            },
        }}
       
        className="card-link">
            <div className="card-pet">
            <h2>{props.name}</h2>
            <i className="fas fa-paw fa-8x"></i>
            <div className="pet-details">
                <div className="item">Genero:</div>
                <div className="item-detail">{props.gender}</div>
                <div className="item">Tamaño:</div>
                <div className="item-detail">{props.size}</div>
                <div className="item">Temperamento:</div>
                <div className="item-detail">{props.temperament}</div>
                <div className="item">Edad:</div>
                <div className="item-detail">{props.age}</div>
            </div>
            
            <button className="card-pet-more" type="submit">Conocer</button>
            </div>
        </Link>
    
    )
}

export default PreviewCard;