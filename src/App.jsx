import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/App.css'

import Carrito from './components/Carrito'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Productos from './components/Productos'

function App() {
  const [count, setCount] = useState(0)
  const [carrito, setCarrito] = useState([]);
  function agregarCarrito(a){
    console.log("ENTRE")
}
  return (
    <div className='APP'>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/Productos' element={<Productos></Productos>}></Route>
      </Routes>

    </div>
  )
}

export default App
