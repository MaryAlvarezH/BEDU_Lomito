import React from 'react'
import './pet-details-view.scss'
import { axiosInstance } from '../../shared/helpers';

function PetDetailsView(props){

    const [pet, setPet] = React.useState({});
    const [activity, setActivity] = React.useState({
        userId: '',
        petId: '',
        like: '',
        registeredAt:'',
        text:''
    });
   
    React.useEffect(() => {
        console.log('soy useEffect')
        if (props.petDetails) {
            if (props.petDetails.fromPreview){
                console.log('viene del preview')
                setPet({...props.petDetails})
               
                console.log('pet',pet)
            }
            else return
        } else {
            console.log('no viene del preview')
            const id  = props.location.search.split('=')[1];
           
            handleDataByPet(id,'pets').then((petData)=> {
                setPet(petData);
                console.log('pet',pet)
            })
        }
        
        
    },[pet.id])

    const handleDataByPet = async(id,method) =>{
        const {data} = await axiosInstance.get(`/${method}${method === 'pets'?`/${id}`: ''}`);
        return data
    }

    const handleAddCommentClick =() => {
        console.log('activity',activity)
        setActivity({
            ...activity,
            userId:1,
            petId: pet.id,
            like:false,
            registeredAt: new Date().getDate()
        })
      

    }

    const handleCommentChange = (e) => {
       
        setActivity({...activity, text:e.target.value})
        console.log('activity',activity)
    }
    
    return(
        <section className="info-pet-details">
            <div className="card-full-details">
                <h2>{pet.name}</h2>
                <div className="general-full-details">
                    <div className="image-full-details">
                        <i className="fas fa-paw fa-10x"></i>
                    </div>
                    <div className="description-full-details">
                        <div className="item-detail">
                            <span>Genero:</span>
                            <p>{pet.gender}</p>
                        </div>
                        <div className="item-detail">
                            <span>Especie:</span>
                            <p>{pet.sort}</p>
                        </div>
                        <div className="item-detail">
                            <span>Tamaño:</span>
                            <p>{pet.size}</p>
                        </div>
                        <div className="item-detail">
                            <span>Raza:</span>
                            <p>{pet.breed}</p>
                        </div>
                        <div className="item-detail">
                            <span>Edad:</span>
                            <p>{pet.age}</p>
                        </div>
                        <div className="item-detail">
                            <span>Temperamento:</span>
                            <p>{pet.temperament}</p>
                        </div>
                        <div className="item-detail">
                            <span>Habilidades:</span>
                            {
                                Array.isArray(pet.skills) && pet.skills.join(', ')
                            }
                           
                        </div>
                        <div className="item-detail">
                            <span>Observaciones:</span>
                            <p>{pet.observations}</p>
                        </div>
                        <div className="card-pet-options">
                            <button type="submit" className="btn-like"><i className="fa fa-heart"></i></button>
                            <button type="submit" className="btn-comment"><i className="fa fa-comments"></i></button>
                            <button type="submit" className="btn-adopt">Adoptar</button>
                        </div>
                    </div>
                
                </div>
            <hr/>
            <h3>Comentarios</h3>
            <div className="commets-container">
                <input placeholder="¿Tienes dudas? Escíbele al dueño de este lomito" value={activity.text} onChange={e => setActivity({...activity,text:e.target.value})}/>
                <input type="button" name="submit" className="btn-comment" onClick={handleAddCommentClick} value="Enviar"/>
            </div>
            {
                props.activities.map(act =>{
                    if (act.petId === pet.id) {
                        return (
                            <div className="comment" key={act.id}>
                                <div className="comment-detail">
                                    <i className="fas fa-user fa-2x"></i>
                                    <div className="coment-text">
                                    <div className="date">
                                        <span>{act.comment.registeredAt}</span>
                                    </div>
                                        <p>{act.comment.text}</p>
                                    </div>
                                </div>
                                
                                <div>
                                {
                                   act.userId===1 ? (
                                        <div className="edit-comment">
                                            <button type="text">Editar</button>
                                            <button type="text">Borrar</button>
                                            
                                        </div>
                                   ): null
                               }
                                </div>
                            </div>  
                        )
                    }
                })
            }
        </div>
    </section>
    )
}

export default PetDetailsView