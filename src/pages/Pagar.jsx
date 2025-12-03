import React, { useContext } from 'react';
import "../css/Pagar.css"
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CarritoContext } from "../context/CarritoContext";
function Pagar() {
  const { vaciarCarrito } =  useContext(CarritoContext);
  return (
    <div className='div-pagar'>
      <div className="CardPagar">
        <IoCheckmarkCircleOutline  className='logo-pagar' />
        <h3>El pago se realizo con exito!</h3>
        <p>muchas gracias!</p>
        <Link className='pagar-volver' onClick={vaciarCarrito} to="/">Volver</Link>
      </div>
    </div>
  )
}

export default Pagar