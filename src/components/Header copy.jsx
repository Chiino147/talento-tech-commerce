import {React,useEffect,useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import '../css/Header.css'
import logo from '../img/logo.svg'
import userLogo from '../../public/img/userLogo.svg'
import carritoLogo from '../img/carrito.svg'
import { CarritoContext } from '../context/CarritoContext';
import Producto from './Producto'
function Header() {

  const [categorias, setCategorias] = useState([])
  

  useEffect(() => {
    fetch("https://68e443538e116898997b6778.mockapi.io/tipos")
      .then((categoria) => categoria.json())
      .then((categoria) => {
          setCategorias(categoria)
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  },[]);
  const {carrito,vaciarCarrito,total} =  useContext(CarritoContext)


  const [Submenu, setSubmenu] = useState()
  return (
    <div className='Header'>
        <nav>
          <ul className="ulNav">
            <li className="ilNav"><Link to="/">inicio</Link></li>
            <li className="ilNav">Productos
              {/*Submenú */}
              <ul className="submenu">
              {categorias.map((categoria)=>(
                <li key={categoria.id}> <Link to={`/${categoria.categoria}`}>{categoria.categoria}</Link> </li>
              ))}</ul> </li>
          </ul>
        </nav>

        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" className='header-logo'/>
          </Link>
        </div>
        <div className='NavCarrito'>
          <input type="text" placeholder='buscador...' />
          <li className="ilNav productos">
            <img src={carritoLogo} alt="Carrito" className="nav-carrito-img" />
            <ul className="submenu">
            {carrito.length > 0 ? (
                carrito.map((producto) => (
                  <li key={producto.id}>
                    <strong>- {producto.nombre}</strong> × {producto.cantidad} <br />
                    Precio: ${producto.precioOriginal.toFixed(2)}{' '}
                    {producto.descuento > 0 && (
                      <span>-{producto.descuento}%</span>
                    )}
                  </li>
                ))
              ) : (
                <li>Carrito vacío</li>
              )}

              <li>
                <strong>{total.toFixed(2)}</strong>
              </li>
              <li>
                <button>
                  <Link to="/comprar">Ver carrito</Link>
                </button>
              </li>
            </ul>
          </li>
        </div>

          <Link to="/login">

              <img src={userLogo} clalt="" />
          </Link>

        
    </div>
  )
}

export default Header