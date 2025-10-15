import React from 'react'
import "../css/Catalogo.css"
import {Link} from 'react-router-dom'
function CardCatalogo({nombre,precio,imagen,descuento,id,categoria,agregar}) {
  return (
    <div className='catalogo-card'>
        <Link to={`/categoria/${id}`}>
        <div className="catalogo-card-img">
            <img src={imagen} alt={nombre} />
        </div>
        <h3>{nombre}</h3>
        <div className="precio-container">
        {descuento > 0 ? (
            <> 
             <h4 className="precio-original">${precio}</h4>
            <h4 className="precio-descuento"> ${ (precio * (1 - descuento / 100)).toFixed(2)}</h4>
            <p className="descuento">{descuento}% OFF</p>
            </>
        ) : (
            <h4 className="precio-normal">${precio}</h4>)}
</div>
            </Link>
        <button onClick={() => agregar({id, nombre, precio, imagen, descuento, categoria})}>Comprar!</button>
    </div>
  )
}

export default CardCatalogo