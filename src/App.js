import React, {Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './shared/navbar/navbar';
import Home from './pages/home/home';
import Adopt from './pages/adopt/adopt';
import SearchHome from './pages/searchHome/searchHome';
import Footer from './shared/footer/footer';
import PetDetails from './pages/pet-details/pet-details';
import HumanRegister from './pages/session/human-register/humanRegister';
import Login from './pages/login/login';
import { UserContext } from './shared/user-context';
import petRegister from './pages/session/pet-register/petRegister';


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
    <UserContext.Provider value={state}>
    <BrowserRouter>
      <Fragment>
        <Navbar></Navbar>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/adopt" component={Adopt}></Route>
        <Route exact path="/pet-detail" component={PetDetails}></Route>
        <Route exact path="/search-home" component={SearchHome}></Route>
        <Route exact path="/human-register" component={HumanRegister}></Route>
        <Route exact path="/pet-register" component={petRegister}></Route>


        {/* <Route exact path="/pet-register" component={HumanRegister}></Route> */}
        <Route exact path="/login" component={Login} setState={setState}></Route>
        <Footer></Footer>
      
      </Fragment>
    </BrowserRouter>
    </UserContext.Provider>
   
  );
}

export default App;
