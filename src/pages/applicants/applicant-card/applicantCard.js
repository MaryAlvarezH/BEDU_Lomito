import React from 'react'
import { axiosInstance } from '../../../shared/helpers';
import defaultImage from '../../../assets/images/pet-default.png';
import '../applicants.scss';
import Moment from 'moment'

function ApplicantCard (props) {
    const [applicants, setApplication] = React.useState(props.applicants);

    const handleOptionAdoption = async(petId, status) => {
        const body = {
            _id: petId,
            status
        }
        const {data} = await axiosInstance.post(`/pets/set-status`, body);
        return data
    }

    const onOptclick = async(petId, status) => {
        const resp = await handleOptionAdoption(petId, status);
        console.log('resp', resp);

        if (resp.status) {
            const currentApplication = await props.handleDataByUser();
            setApplication(currentApplication);
        }
    }
    return (
        <div>
            {
                applicants && applicants.length>0 && Array.isArray(applicants) && applicants.map((application, index) => {
                    return (
                        <div className="card">
                            <div className="pet-details">
                                <p className="pet-name">
                                    {application.name}
                                </p>
                                <p className="pet-register">
                                    <span>Fecha de registro:</span>
                                    <span>{Moment(application.createdAt).format('DD/MM/YYYY')}</span>
                                </p>
                            </div>
                            <div className="application-details">
                                <div className="pet-image-profile" key={index}>
                                    {
                                        application && !application.imageURL && 
                                        <img src={defaultImage} alt="pet" className="default" />
                                    }
                                    {
                                        application && application.imageURL &&
                                        <img src={application.imageURL} alt="pet" />
                                    }
                                </div>
                                <div className="applicants-container">
                                    {
                                        application.applicants_details && application.applicants_details.length>0 &&
                                        <div className="applicants-list">
                                            <span className="subtitle">Solicitantes</span>
                                            <div className="applicants-properties">
                                                <span></span>
                                                <span>Nombre</span>
                                                <span>Apellido</span>
                                                <span>Email</span>
                                                <span>Domicilio</span>
                                                <span>Solicitud</span>
                                            </div>
                                            {
                                                application.applicants_details.map((applicant,index) => {
                                                    return(
                                                        <div className="applicant-details" key={index}>
                                                            <span>{index+1}</span>
                                                            <span>{applicant.name}</span>
                                                            <span>{applicant.lastName}</span>
                                                            <span>{applicant.email}</span>
                                                            {
                                                                applicant.address && 
                                                                <span>
                                                                    {applicant.address.city ? ` ${applicant.address.city}` : ''}
                                                                    {applicant.address.state ? ` ${applicant.address.state}` : ''}
                                                                    {applicant.address.zip ? ` CP: ${applicant.address.zip}` : ''}
                                                                </span>
                                                            }
                                                            {
                                                                !applicant.address && <span>No disponible</span>
                                                            }
                                                            {
                                                                application.adoption[0][index] &&
                                                                <span>{Moment(application.adoption[0][index].createdAt).format('DD/MM/YYYY')}</span>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                    { 
                                        application.applicants_details && application.applicants_details.length<=0 &&
                                        <div className="without-applicants-container"> 
                                            <span>Sin solicitudes</span>
                                        </div>

                                    }
                                    <div>
                                        {
                                            application.status === "active" &&
                                            <div className="adoption-option">
                                                <button type="submit" className="btn-cancel" onClick={() => onOptclick(application._id, "cancel")}>Cancelar adopción</button>
                                                <button type="submit" className="btn-adopted" onClick={() => onOptclick(application._id, "adopted")}>Adoptado</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
          
            }
        </div>
    )
}
    
export default ApplicantCard;