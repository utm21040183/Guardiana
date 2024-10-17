import React from 'react';
import './PanicButton.css';

const PanicButton = () => {
  const sendAlert = () => {
    const message = '¡Estoy en peligro! Necesito ayuda.';
    const phoneNumber = '4491242071'; // Reemplaza con el número de teléfono real
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abre la URL de WhatsApp
    window.open(whatsappURL, '_blank');

    alert('¡Alerta enviada!'); // Alerta que se muestra al hacer clic
  };

  return (
    <button className="panic-button" onClick={sendAlert}>
      ¡Ayuda!
    </button>
  );
};

export default PanicButton;
