import React from 'react'
import { axiosInstance } from '../../shared/helpers';
import Moment from 'moment';
import imageDefault from '../../assets/images/pet-default.png'
import './pet-details-view.scss'

function PetDetailsView(props){
    const [pet, setPet] = React.useState({});
    // const [activity, setActivity] = React.useState({
    //     userId: '',
    //     petId: '',
    //     like: '',
    //     registeredAt:'',
    //     text:''
    // });
   
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
            })
        }
    },[]);

    const handleDataByPet = async(id) =>{
        const {data} = await axiosInstance.get(`/pets/details/${id}`);
        return data
    }

    const handleAdoption = async(id) => {
        const body = {
            petId: pet._id,
            applicants: [{userId: "5db7d33ea8e050001767cedb"}]
        }
        // "5db49c57d7cb7303fe3d254d"
        const {data} = await axiosInstance.post(`/adoption/add-applicant`, body);
        return data
    }

    const onClickAdopt = async() => {
        const adoption = await handleAdoption();
        console.log('result',adoption);
        if (adoption && adoption.message) {
            setPet({...props.petDetails, reqAdoptionStatus: adoption.message})
        } else if (adoption) {
            setPet({...props.petDetails, reqAdoptionStatus: 'success'})
        }
    }

    // const handleAddCommentClick =() => {
    //     console.log('activity',activity)
    //     setActivity({
    //         ...activity,
    //         userId:1,
    //         petId: pet.id,
    //         like:false,
    //         registeredAt: new Date().getDate()
    //     })
    // }

    // const handleCommentChange = (e) => {
    //     setActivity({...activity, text:e.target.value})
    //     console.log('activity',activity)
    // }
    
    return(
        <div className="panel-container">
            <section className="info-pet-details">
                <div className="card-full-details">
                    <h2 className="pet-name">{pet.name}</h2>
                    <div className="general-full-details">
                        <div className="image-full-details">
                        { pet.imageURL && <img className="pet-image" src={pet.imageURL} alt="lomito"></img>}
                        { !pet.imageURL && <img className="pet-image default" src={imageDefault} alt="lomito"></img>}
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
                            {
                                pet.age && pet.age.number && pet.age.timePeriod &&
                                <div className="item-detail">
                                    <span>Edad:</span>
                                    <p className="age">
                                    {`${pet.age.number} ${pet.age.timePeriod === "mes" && pet.age.number>1 ? "meses" : 
                                                        `${pet.age.timePeriod === "mes" && pet.age.number<=1 ? "mes" :
                                                        `${pet.age.timePeriod === "año" && pet.age.number>1 ? "años" :
                                                        `${pet.age.timePeriod === "año" && pet.age.number<=1 ? "año" : ''
                                                        }`}`}`}
                                    `}
                                    </p>
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
                                { 
                                    pet.reqAdoptionStatus === 'applicant already exist' &&
                                    <span className="status-legend">Ya se ha enviado una solicitud de esta mascota.</span>
                                }
                                {
                                    pet.reqAdoptionStatus === 'success' &&
                                    <span className="status-legend">Solicitud enviada, espera a que el dueño se comunique contigo.</span>
                                    
                                }
                                {
                                    !pet.reqAdoptionStatus && 
                                    <button type="submit" className="btn-adopt" onClick={onClickAdopt}>Solicitar adopción</button>
                                }
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