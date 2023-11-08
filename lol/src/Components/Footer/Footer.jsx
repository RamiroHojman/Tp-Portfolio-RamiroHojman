import React from 'react';
import ContactForm from '../Contacto/Contacto';

export function Footer(){
  return (
    <footer>
      <div className='footerContain'>
        <p className='piezaFooter'>Dirección: Calle Falsa 123, Ciudad Ficticia</p>
        <p className='piezaFooter'>Teléfono: 555-555-555</p>
        <p className='piezaFooter'>Email: ejemplo@dominio.com</p>
        <ContactForm/>
      </div>
    </footer>
  );
};

