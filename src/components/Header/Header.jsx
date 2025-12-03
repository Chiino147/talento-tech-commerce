import { React, useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../img/logo.svg';
import { FiUser } from "react-icons/fi";
import { IoBagOutline, IoMenuOutline } from "react-icons/io5";
import { LuUserRoundPen } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { CarritoContext } from '../../context/CarritoContext';
import { useAuthContext } from "../../context/UserContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const { usuario } = useAuthContext();
  const { carrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  // Abrir/cerrar buscador
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Función genérica para click en links: scroll al top y cerrar menús
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
    setSearchOpen(false);
  };

  // Realizar búsqueda
  const handleSearch = () => {
    if (busqueda.trim() !== "") {
      handleLinkClick(); // Scroll y cerrar buscador
      navigate(`/buscar?query=${encodeURIComponent(busqueda)}`);
      setBusqueda(""); // Limpiar input
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  useEffect(() => {
    fetch("https://68e443538e116898997b6778.mockapi.io/tipos")
      .then((c) => c.json())
      .then((c) => setCategorias(c));
  }, []);

  // Cerrar buscador o menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
      if (searchOpen) setSearchOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, searchOpen]);

  return (
    <header className="header">
      {/* --- Izquierda: Menú hamburguesa --- */}
      <button className="hamburguesa" onClick={() => setMenuOpen(!menuOpen)}>
        <IoMenuOutline size={32} />
      </button>

      {/* --- Menú Mobile --- */}
      <nav className={`menu-mobile ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>Inicio</Link>
          </li>
          {usuario?.nombre === "admin" && (
            <li>
              <Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link>
            </li>
          )}
          <li className="submenu-item">
            Catálogo
            <ul className="submenu">
              {categorias.map((c) => (
                <li key={c.id}>
                  <Link to={`/${c.categoria}`} onClick={handleLinkClick}>
                    {c.categoria}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      {/* --- Centro: Logo + buscador --- */}
      <div className="header-center">
        <Link to="/" className="header-logo" onClick={handleLinkClick}>
          <img src={logo} alt="logo" />
        </Link>

        {/* Buscador tipo hamburguesa debajo del logo */}
        <div className={`search-hamburguesa ${searchOpen ? 'open' : ''}`}>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Buscar productos..."
          />
          <button onClick={handleSearch} className="btn-search">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* --- Derecha: iconos --- */}
      <div className="header-icons">
        <FaSearch className="icono" onClick={toggleSearch} />
        <Link to="/comprar" onClick={handleLinkClick}>
          <IoBagOutline className="icono" />
        </Link>
        {usuario ? (
          <Link to="/Perfil" onClick={handleLinkClick}>
            <LuUserRoundPen className="icono" />
          </Link>
        ) : (
          <Link to="/Login" onClick={handleLinkClick}>
            <FiUser className="icono" />
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
