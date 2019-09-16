import React, {Component,Fragment} from 'react'
import PetDetailsView from './pet-details-View';
import { axiosInstance } from '../../shared/helpers';

class PetDetails extends Component{
    state = {
        activities: []
    }


    

    async componentDidMount() {
        // console.log('pet-detail', this.props)
        const { data: activities, status} = await this.handleData()
        this.setState( {activities} );
    }

    handleData = (data, method = 'GET', model = 'activity') => {
        let body = {};
        let url = `/${model}`;
    
        if (method === 'POST') {
          body = data
        }
    
        return axiosInstance[method.toLowerCase()](`${url}`, body)
    }

    render(){
        return (
            <PetDetailsView petDetails={this.props.location.state} location={this.props.location} activities={this.state.activities} handleData={this.handleData}></PetDetailsView>
        )
    }
}

export default PetDetails