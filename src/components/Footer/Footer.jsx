import React from 'react';
import logo from '../../img/logo.svg';
import  "./Footer.css"
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CiGift, CiStopSign1,CiShoppingTag,CiDiscount1  } from "react-icons/ci";
function Footer() {
  return (
    <div className='footer'>
      <div className="footerConteiner">
        <div className="footerTexto">
          <h4>¡Obtén más beneficios registrándote y uniéndote a la Comunidad Mejiwoo!</h4>
          <span>
            <CiGift  className='footer-logo'/>
            <p>Regalo especial GRATIS para un nuevo miembro</p>
          </span>
          <span>
            <CiShoppingTag  className='footer-logo'/>
            <p>Obtén 2x Puntos JIWOO para comprar artículos</p>
          </span>
          <span>
            <CiStopSign1  className='footer-logo'/>
            <p>Obtenga un código de cupón especial cada mes</p>
          </span>
          <span>
            <CiDiscount1 className='footer-logo'/>
            <p>Reclama tu cupón de descuento. Hasta un 50 %</p>
          </span>
        </div>
        <div className="footerContacto">
          <h4>Contactanos!</h4>
          <form action="">
            <input type="email" placeholder="Ingresa tu email" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>

      <div className="footerLinks">
        <img src={logo} alt="Mejiwoo Logo"/>
        <span>
          <a href="https://github.com/Chiino147/talento-tech-commerce" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/martin-fernandez-1b1965220/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </span>
      </div>
      <p className='footer-p'>2025 MEJIWOO. All Rights Reserved</p>
    </div>
  );
}

export default Footer;