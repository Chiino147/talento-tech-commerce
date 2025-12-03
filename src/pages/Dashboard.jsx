import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineUnorderedList } from 'react-icons/ai';
import '../css/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="botones">
        {/* Agregar Producto */}
        <Link to="/agregar" className="btn-dashboard btn-primary">
          <AiOutlinePlus className="icono-btn" />
          Agregar Producto
        </Link>

        {/* Ver Stock */}
        <Link to="/stock" className="btn-dashboard btn-secondary">
          <AiOutlineUnorderedList className="icono-btn" />
          Ver Stock
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;