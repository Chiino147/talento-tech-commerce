import React from 'react'
import { useState } from 'react'        


function Carrito() {
    const [carrito, setCarrito] = useState([]);

    function manejarCarrito(producto){
        console.log(producto)
    }
  return (
    <div>
        <h2>El carrito:</h2>
        <p>carrito</p>
        
    </div>
  )
}



export default Carrito