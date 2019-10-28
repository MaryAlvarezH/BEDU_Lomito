import React from 'react'
import { axiosInstance } from '../../../shared/helpers';
import defaultImage from '../../../assets/images/pet-default.png';
import '../applicants.scss';
import Moment from 'moment'


function ApplicantCard (props) {
    return (
        <div className="pet-container">
            <div className="pet-details">
                {
                    props.application && !props.application.imageURL && 
                    <img src={defaultImage} alt="pet" className="default" />
                }
                {
                    props.application && props.application.imageURL &&
                    <img src={props.application.imageURL} alt="pet" className="default" />
                }
                <span className="pet-name">
                    {props.application.name}
                </span>
                <p>
                    <span>Fecha de registro:</span>
                    <span>{Moment(props.application.createdAt).format('DD/MM/YYYY')}</span>
                </p>
            </div>
            <div className="applicants-container">
                <span class="subtitle">Solicitantes</span>
                <div className="applicants-properties">
                    <span></span>
                    <span>Nombre</span>
                    <span>Apellido</span>
                    <span>Email</span>
                    <span>Domicilio</span>
                    <span>Solicitud</span>
                </div>
                {
                    props.application.applicants_details && props.application.applicants_details.map((applicant,index) => {
                        return(
                            <div className="applicant-details">
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
                                    props.application.adoption[0][index] &&
                                    <span>{Moment(props.application.adoption[0][index].createdAt).format('DD/MM/YYYY')}</span>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="adoption-option">
                <button type="submit" className="btn-adopt">Cancelar adopción</button>
                <button type="submit" className="btn-adopt">Adoptado</button>
            </div>
        </div>
    )
}

export default ApplicantCard;