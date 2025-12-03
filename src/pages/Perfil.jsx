import React, { use } from 'react'
import { useAuthContext } from '../context/UserContext'
useAuthContext
function Perfil() {
    const { usuario, cerrarSesion } = useAuthContext();
  return (
    <div>
        <h2>Bienvenido usuario!</h2>
        <p>Su email: {usuario.nombre}</p>

        <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </div>
  )
}

export default Perfil