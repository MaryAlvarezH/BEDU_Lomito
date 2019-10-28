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
        const userId = '5db49c57d7cb7303fe3d254d';
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