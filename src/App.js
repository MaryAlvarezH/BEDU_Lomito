import React, { Component, createContext, Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import { UserContext } from './shared/UserContext';
import Navbar from './shared/navbar/bar/navbar';
import Home from './pages/home/home';
import Adopt from './pages/adopt/adopt';
import HumanRegister from './pages/human-register/humanRegister';
import PetRegister from './pages/pet-register/petRegister';
import PetDetails from './pages/pet-details/pet-details';
import Footer from './shared/footer/footer';
import { UserLogin } from './pages/login/login';
import Applicants from './pages/applicants/applicants';

import './App.scss'
const { Provider, Consumer} = createContext();

function App() {

  return (
    <div className="panel-container">
      <UserContext.Provider>
        <BrowserRouter>
          <Fragment>
            <Navbar></Navbar>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/adopt" component={Adopt}></Route>
            <Route exact path="/pet-detail" component={PetDetails}></Route>
            <Route exact path="/human-register" component={HumanRegister}></Route>
            <Route exact path="/pet-register" component={PetRegister}></Route>
            <Route exact path="/login" component={ UserLogin }></Route>
            <Route exact path="/applicants" component={Applicants}></Route>
            <Footer></Footer>
          </Fragment>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
   
   
  );
}

export default App;
