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
         <div className="button-4" onClick={this.showDropdownMenu}><i className="fa fa-user-circle user-icon"></i></div>
         

         <div className='dropDownC'>
          { 
            this.state.displayMenu ? (
              <ul className="drop">
                <li><NavLink exact to="/applicants" className='item2' activeClassName="is-selected">Mis solicitudes</NavLink></li>
                <li><NavLink exact to="/login" className='item2' activeClassName="is-selected">Iniciar sesión</NavLink></li>
                <li><NavLink exact to="/human-register" className='item2' activeClassName="is-selected">Registarse</NavLink></li>
                
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