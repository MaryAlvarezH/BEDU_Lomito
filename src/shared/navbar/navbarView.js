import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbarView.scss'
import Dropdown from '../../dropdownmenu/dropdown'

 const NavbarView =(props) =>{
   
    return (
        <header className="site-navbar">
          <nav>
          <ul>
              <div className="main-item">
                  <li><NavLink exact to="/" className="logo" activeClassName="is-selected">Lomito</NavLink></li>
              </div>
              <div className="pages-items">
                  <li><NavLink exact to="/adopt" className="item" activeClassName="is-selected">Adopta</NavLink></li>
                  <li><NavLink exact to="/search-home" activeClassName="is-selected">Buscar Hogar</NavLink></li>
                  
                  <li><Dropdown></Dropdown></li>
                  
                  
              </div>
              </ul>
          </nav>
        </header>
      )

}

export default NavbarView