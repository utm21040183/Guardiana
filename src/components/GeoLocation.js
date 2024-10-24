import { useEffect, useState } from 'react';
import axios from 'axios';
import './GeoLocation.css';

const GeoLocation = () => {
  const [location, setLocation] = useState({ lat: null, lng: null, address: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          setLocation({ lat, lng });

          try {
            // Usar Nominatim para obtener la dirección
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
            const address = response.data.display_name; // O modificar según la estructura de respuesta deseada
            setLocation((prev) => ({ ...prev, address }));
          } catch (error) {
            setError('No se pudo obtener la dirección.');
          }
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocalización no disponible en este navegador.');
    }
  }, []);

  const sendMessage = () => {
    const phoneNumber = '911'; 
    const message = `Necesito ayuda!! ${location.address} (Lat: ${location.lat}, Lng: ${location.lng})`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abre el enlace de WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="geo-location-container">
      <h3>Tu ubicación actual:</h3>
      {error ? (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      ) : (
        <div className="location-info">
          <p>Latitud: {location.lat}</p>
          <p>Longitud: {location.lng}</p>
          <p>Dirección: {location.address}</p>
          <button onClick={sendMessage} className="send-message-button">Enviar mi ubicación</button>
        </div>
      )}
    </div>
  );
};

export default GeoLocation;
