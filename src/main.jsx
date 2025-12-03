import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import CarritoProvider from './context/CarritoContext'
import { LoginProvider } from "./context/UserContext";
createRoot(document.getElementById('root')).render(
  <Router>
    <LoginProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </LoginProvider>
  </Router>
)
