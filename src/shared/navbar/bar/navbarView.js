import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbarView.scss'
import Dropdown from '../dropdownmenu/dropdown'

 const NavbarView =(props) =>{
   
    return (
        <header className="site-navbar">
          <nav>
          <ul>
              <div className="main-item">
                  <li><NavLink exact to="/" className="logo" activeClassName="is-selected">Lomito</NavLink></li>
              </div>
              <div className="pages-items">
                  <li><NavLink exact to="/adopt" className="item" activeClassName="is-selected">Adoptar</NavLink></li>
                  <li><NavLink exact to="/pet-register" activeClassName="is-selected">Agregar lomito</NavLink></li>
                  <li><Dropdown></Dropdown></li>
              </div>
              </ul>
          </nav>
        </header>
      )

}

export default NavbarView