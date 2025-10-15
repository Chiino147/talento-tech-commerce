import {React,useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/Header.css'
import logo from '../assets/icons/logo.svg'
import carritoLogo from '../../public/img/carrito.svg'
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
          <li className="ilNav productos"> <img src={carritoLogo} alt="" className='nav-carrito-img'/>
              {/*Submenú */}
              <ul className="submenu">
                {categorias.map((categoria)=>(
                  <li key={categoria.id}> <Link to={`/${categoria.categoria}`}>{categoria.categoria}</Link> </li>
                ))}
              </ul> 
          </li>
        </div>
    </div>
  )
}

export default Header