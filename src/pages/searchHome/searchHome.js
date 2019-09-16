import React, {Component,Fragment} from 'react'
import SearchHomeView from './searchHomeView';

class SearchHome extends Component {
    render() {
        return (
            <Fragment>
                <h1>I am SearchHome</h1>
                <SearchHomeView></SearchHomeView>
                
            </Fragment>
        )
    }
}


export default SearchHome;