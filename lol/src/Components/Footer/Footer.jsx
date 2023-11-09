import React from 'react';
import ContactForm from '../Contacto/Contacto';
import "./Footer.css"

export function Footer() {
  return (
    <footer className='footerTodo'>
    <div className='footerContain container'>
      <div className='info'>
        <p className='piezaFooter'>Dirección: Calle Falsa 123, Ciudad Ficticia</p>
        <p className='piezaFooter'>Teléfono: 555-555-555</p>
        <p className='piezaFooter'>Email: ejemplo@dominio.com</p>
      </div>
      <div className='contactForm'><ContactForm /></div>
    </div>
  </footer>
  );
};

