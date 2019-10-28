import React from 'react'
import { axiosInstance } from '../../shared/helpers';
import ApplicantCard from './applicant-card/applicantCard';
import './applicants.scss';

function Applicants(props) {
    const [applicants, setApplicants] = React.useState([]);

    React.useEffect(() => {
        handleDataByUser().then(data=> {
            console.log('data', data);
            setApplicants(data)
            console.log('aplicants',applicants);
        });
    }, []); 

    const handleDataByUser = async() => {
        const userId = '5db49c57d7cb7303fe3d254d';
        const {data} = await axiosInstance.get(`/adoption/info/${userId}`);
        return data
    }
    return(
        <div className="applicants-panel">
            <div className="title">Solicitudes de adopción</div>
            {
                  applicants && applicants.length>0 && applicants.map(application => {
                    return (
                        <ApplicantCard application={application}></ApplicantCard>
                    )
                })
            }
        </div>
    )
}

export default Applicants