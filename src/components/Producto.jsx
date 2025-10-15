import React from 'react'
import {useParams} from 'react-router-dom'
function Producto({id_producto}) {
    const {producto} = useParams();
  return (
    <div>
        <h1>{producto}</h1>
    </div>
  )
}

export default Producto