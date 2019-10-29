import React from 'react'
import { axiosInstance } from '../../shared/helpers';
import ApplicantCard from './applicant-card/applicantCard';
import './applicants.scss';

function Applicants(props) {
    const [applicants, setApplicants] = React.useState([]);

    React.useEffect(() => {
        handleDataByUser().then(data=> {
            setApplicants(data)
        });
    }, []); 

    const handleDataByUser = async() => {
        const userId = '5db7b1b06b4c2000179a0939';
        const {data} = await axiosInstance.get(`/adoption/info/${userId}`);
        return data
    }
    return(
        <div className="applicants-panel">
            <div className="title">Solicitudes de adopción</div>
            {
                applicants && applicants.length>0 &&
                    <ApplicantCard applicants={applicants} handleDataByUser={handleDataByUser}></ApplicantCard>
            }
        </div>
    )
}

export default Applicants