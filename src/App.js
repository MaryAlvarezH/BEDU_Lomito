import React, {Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import { UserContext } from './shared/user-context';
import Navbar from './shared/navbar/bar/navbar';
import Home from './pages/home/home';
import Adopt from './pages/adopt/adopt';
import HumanRegister from './pages/human-register/humanRegister';
import PetRegister from './pages/pet-register/petRegister';
import PetDetails from './pages/pet-details/pet-details';
import Footer from './shared/footer/footer';
import Login from './pages/login/login';
import Applicants from './pages/applicants/applicants';

import './App.scss'

function App() {

  // const UserAccessContext = React.createContext();
  //  const setLoggedIn = status => setState({...state, status})

  const setLoggedIn = (userName, loggedIn) => {
    console.log('soy App y estan cambiando mi estado!')
    console.log('entran ',userName,loggedIn)
    setState({...state,userName,loggedIn})
    console.log(state)
  }

  const [state, setState] = React.useState({
    setLoggedIn,
    userName: '',
    loggedIn: false,
  });

  return (
    <div className="panel-container">
    <UserContext.Provider value={state}>
        <BrowserRouter>
          <Fragment>
            <Navbar></Navbar>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/adopt" component={Adopt}></Route>
            <Route exact path="/pet-detail" component={PetDetails}></Route>
            <Route exact path="/human-register" component={HumanRegister}></Route>
            <Route exact path="/pet-register" component={PetRegister}></Route>
            <Route exact path="/login" component={Login} setState={setState}></Route>
            <Route exact path="/applicants" component={Applicants}></Route>
            <Footer></Footer>
          </Fragment>
        </BrowserRouter>
        </UserContext.Provider>
    </div>
   
   
  );
}

export default App;
