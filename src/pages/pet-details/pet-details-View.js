import React from 'react'
import { axiosInstance } from '../../shared/helpers';
import Moment from 'moment';
import imageDefault from '../../assets/images/pet-default.png'
import './pet-details-view.scss'

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
        if (props.petDetails) {
            if (props.petDetails.fromPreview){
                setPet({...props.petDetails})
            }
            else return
        } else {
            const id  = props.location.search.split('=')[1];
            handleDataByPet(id).then((petData)=> {
                setPet(petData);
                console.log('pet',pet)
            })
        }
    },[pet.id])

    const handleDataByPet = async(id) =>{
        const {data} = await axiosInstance.get(`/pets/details/${id}`);
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
        <div class="panel-container">
            <section className="info-pet-details">
                <div className="card-full-details">
                    <h2>{pet.name}</h2>
                    <div className="general-full-details">
                        <div className="image-full-details">
                        { pet.imageURL && <img className="pet-image" src={pet.imageURL}></img>}
                        { !pet.imageURL && <img className="pet-image default" src={imageDefault}></img>}
                        </div>
                        <div className="description-full-details">
                            <div className="item-detail">
                                <span>Especie:</span>
                                <p>{pet.sort}</p>
                            </div>
                            <div className="item-detail">
                                <span>Genero:</span>
                                <p>{pet.gender}</p>
                            </div>
                            <div className="item-detail">
                                <span>Tamaño:</span>
                                <p>{pet.size}</p>
                            </div>
                            <div className="item-detail">
                                <span>Raza:</span>
                                <p>{pet.breed}</p>
                            </div>
                            {pet.age && pet.age.number && pet.age.timePeriod && 
                                <div className="item-detail">
                                    <span>Edad:</span>
                                    <p>{`${pet.age.number} ${pet.age.timePeriod}(s)`} </p>
                                </div>
                            }
                            <div className="item-detail">
                                <span>Temperamento:</span>
                                <p>{pet.temperament}</p>
                            </div>
                            {
                                pet.skills && Array.isArray(pet.skills) && pet.skills.length > 0 && pet.skills[0]!=="" &&
                                <div className="item-detail">
                                    <span>Habilidades: {Array.isArray(pet.skills)}</span>
                                    {
                                        pet.skills.join(', ')
                                    }
                                </div>
                            }
                            {
                                pet.observations && Array.isArray(pet.observations) && pet.observations.length>0 && pet.observations[0]!=="" &&
                                <div className="item-detail">
                                    <span>Observaciones:</span>
                                    {
                                        pet.observations.join(', ')
                                    }
                                </div>
                            }
                            {
                                pet.hometown && 
                                <div className="item-detail">
                                    <span>Lugar de origen:</span>
                                    <p>{pet.hometown}</p>
                                </div>
                            }
                            {
                                pet.createdAt && 
                                <div className="item-detail">
                                    <span>Fecha de ingreso:</span>
                                    <p>{Moment(pet.createdAt).format('DD/MM/YYYY')}</p>
                                </div>
                            }
                        
                            <div className="card-pet-options">
                                {/* <button type="submit" className="btn-like"><i className="fa fa-heart"></i></button>
                                <button type="submit" className="btn-comment"><i className="fa fa-comments"></i></button> */}
                                <button type="submit" className="btn-adopt">Solicitar adopción</button>
                                {/* <span className="status-legend">Solicitud enviada, espera a que el dueño se comunique contigo.</span> */}
                            </div>
                        </div>
                    
                    </div>
                {/* <hr/>
                <h3>Comentarios</h3>
                <div className="commets-container">
                    <input placeholder="¿Tienes dudas? Escíbele al dueño de este lomito" value={activity.text} onChange={e => setActivity({...activity,text:e.target.value})}/>
                    <input type="button" name="submit" className="btn-comment" onClick={handleAddCommentClick} value="Enviar"/>
                </div> */}
                {/* {
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
                } */}
            </div>
        </section>
    </div>
    )
}

export default PetDetailsView