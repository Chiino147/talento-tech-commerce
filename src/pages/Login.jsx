import React, { useState } from 'react'
import { useAuthContext } from '../context/UserContext'
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Login.css"
function Login() {
    const navigate = useNavigate();
    const ubicacion = useLocation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { iniciarSesion } = useAuthContext(); // viene del contexto
    const [formulario, setFormulario] = useState({ email: "", password: "" });

    const getLogin = (e) => {
      e.preventDefault()
      console.log('Email:', email)
      console.log('Contraseña:', password)
      // acá podrías hacer una petición con fetch o axios

      // --- LOGIN ADMIN ---
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("authEmail", email);

      iniciarSesion("admin", email);   // user admin
      navigate("/dashboard");
      return;
    }

    // --- LOGIN USUARIO NORMAL ---
    if (email && password) {
      localStorage.setItem("authEmail", email);

      iniciarSesion(email, email);     // user común

      // Si venía del carrito → pagar
      if (ubicacion.state?.carrito) {
        navigate("/pagar", { state: { carrito: ubicacion.state.comprar } });
      } else {
        navigate("/comprar");
      }

      return;
    }

    // --- ERROR ---
    alert("Credenciales incorrectas. Intentalo de nuevo.");
  };
      
      


  return (
    <div className='div-login'>
      <h1>Inicia Sesion</h1>
        <form onSubmit={getLogin} method="get">
            <label htmlFor="">email:</label>
            <input type="email" placeholder='ejemplo@hotmail.com'            
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="">contraseña</label>
            <input type="password" name="" id="" value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Logearse</button>

        </form>
    </div>

  )
}

export default Login