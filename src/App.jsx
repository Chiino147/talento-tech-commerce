import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Header from './components/Header/Header'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Producto from './components/Producto/Producto'
import Carrito from './pages/Carrito'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Pagar from './pages/Pagar'
import Buscar from './pages/Buscar'
import RutaProtegida from './routes/RutaProtegida'
import RutaAdmin from './routes/RutaAdmin'
import AgregarProducto from  '../src/components/AgregarProducto'
import EditarProducto from  '../src/components/EditarProducto'
import Perfil from './pages/Perfil'
import { Helmet } from "react-helmet";
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='APP'>
    <Helmet>
    <meta name="description" content="Bienvenido a nuestra tienda online!." />
    </Helmet>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/:categoria' element={<Catalogo></Catalogo>}></Route>
        <Route path="/buscar" element={<Buscar />} />
        <Route path='/:categoria/:producto' element={<Producto></Producto>}></Route>
        <Route path='/comprar' element={<Carrito></Carrito>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/pagar' element={<RutaProtegida><Pagar></Pagar></RutaProtegida>}></Route>
        <Route path='/dashboard' element={<RutaAdmin><Dashboard/></RutaAdmin>}></Route>
        <Route path='/editar/:id' element={<RutaAdmin> <EditarProducto/>  </RutaAdmin>}></Route>
        <Route path='/agregar' element={<RutaAdmin><AgregarProducto/></RutaAdmin>}></Route>
        <Route path='/Perfil' element={<RutaProtegida><Perfil></Perfil></RutaProtegida>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
