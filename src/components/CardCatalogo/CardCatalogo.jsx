import React,{useContext} from 'react'
import "./CardCatalogo.css"
import {Link} from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext';
import { useAuthContext } from '../../context/UserContext';
import { CiEdit } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
function CardCatalogo({ nombre, precio, imagen, descuento, id, categoria }) {
  const { agregarProducto } = useContext(CarritoContext);
  const { usuario } = useAuthContext();

  // 👉 Formateo de precios en ARS
  const formatPrecio = (valor) =>
  (Number(valor) || 0).toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
    // Función para ir arriba de todo
    const handleLinkClick = () => {
      window.scrollTo(0, 0);
    };

  return (
    <div className='catalogo-card'>
      <Link to={`/categoria/${id}`} onClick={handleLinkClick}>
        <div className="catalogo-card-img">
          <img src={imagen} alt={nombre} />
        </div>

        <h3>{nombre}</h3>

        <div className="precio-container">
          {descuento > 0 ? (
            <>
              <h4 className="precio-original">${formatPrecio(precio)}</h4>

              <h4 className="precio-descuento">
                ${formatPrecio(precio * (1 - descuento / 100))}
              </h4>

              <p className="descuento">{descuento}% OFF</p>
            </>
          ) : (
            <h4 className="precio-normal">${formatPrecio(precio)}</h4>
          )}
        </div>
      </Link>

      <button onClick={() =>
        agregarProducto({ id, nombre, precio, imagen, descuento, categoria })
      }>
        Comprar!
      </button>

      {usuario?.nombre === "admin" && (
        <button className='buttonAdmin'>
          <Link className='buttonAdmin-Link' to={`/editar/${id}`}>Editar Producto</Link>
        </button>
      )}
    </div>
  )
}

export default CardCatalogo