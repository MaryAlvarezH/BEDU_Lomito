import React from 'react';
import './stylesdrop.scss';
import {NavLink} from 'react-router-dom';

class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" >
         <div className="button-4" onClick={this.showDropdownMenu}> Sesión </div>
          <div className='dropDownC'>
          { this.state.displayMenu ? (
          <ul className="drop">
            <li><NavLink exact to="/login" className='item2' activeClassName="is-selected">Iniciar sesión</NavLink></li>
            {/* <li><a href="#sesion">olvide mi contraseña!</a></li> */}
            <li><NavLink exact to="/human-register"className='item2' activeClassName="is-selected">Registarse</NavLink></li>
            {/* <li><NavLink exact to ="/pet-register" activeClassName="is-selected">registro Lomito</NavLink>    </li> */}
          </ul>
        ):
        (
          null
        )
        }
          </div>
       </div>

    );
  }
}

export default Dropdown;