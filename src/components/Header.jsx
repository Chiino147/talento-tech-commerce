import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Header.css'
import logo from '../assets/icons/logo.svg'
function Header() {
  return (
    <div className='Header'>
        <nav>
          <ul className="ulNav">
            <li className="ilNav"><Link to="/">inicio</Link></li>
            <li className="ilNav"><Link to="/Productos">Productos</Link></li>
          </ul>
        </nav>
        <img src={logo} alt="logo" className='header-logo' />
        <div className='NavCarrito'>
          <p>Buscador</p>
          <p>carrito</p>
        </div>
    </div>
  )
}

export default Header