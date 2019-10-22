import React, { Component, Fragment } from 'react';
import AdoptView from './adoptView';
import { axiosInstance } from '../../shared/helpers';
import { OKcodes } from '../../shared/constans';
import { URL } from '../../environments/environment';

class Adopt extends Component {
    state = {
        pets: []
    }

    async componentDidMount() {
        const { data: pets, status } = await this.handleData();
        console.log('pets',pets);
        console.log('status',status);

        if (!OKcodes.includes(status)) {
            console.error('Error al traer los datos');
        }

        this.setState({ pets });
    }

    handleData = (method = 'GET', model = 'pets') => {
        // let url = `/${model}`;
        let url = `${URL}${model}/all`

        return axiosInstance[method.toLowerCase()](`${url}`)
    }

    render() {
        return ( 
        <Fragment>
            <AdoptView petList = { this.state.pets } ></AdoptView>  
        </Fragment>
        )
    }
}

export default Adopt