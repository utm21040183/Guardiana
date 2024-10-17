import React, { useState, useEffect, useRef } from 'react';
import './CallSimulation.css';

const CallSimulation = () => {
  const [isIncomingCall, setIsIncomingCall] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Copia el valor actual de audioRef.current a una variable local
    const audioElement = audioRef.current;

    // Simular una llamada entrante después de 10 segundos
    const callTimeout = setTimeout(() => {
      setIsIncomingCall(true);
      // Reproducir sonido de llamada
      if (audioElement) {
        audioElement.play();
      }
    }, 10000); // 10 segundos de espera antes de la simulación de la llamada

    return () => {
      clearTimeout(callTimeout); // Cleanup del timeout
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, []);

  const handleAcceptCall = () => {
    setCallAccepted(true);
    if (audioRef.current) {
      audioRef.current.pause(); // Detener sonido de llamada al aceptar
    }
  };

  const handleDiscreetDeactivate = () => {
    // Lógica de desactivación discreta
    setIsIncomingCall(false);
    setCallAccepted(false);
    if (audioRef.current) {
      audioRef.current.pause(); // Detener sonido de llamada al desactivar
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="call-simulation-container">
      {/* Elemento de audio para el sonido de llamada */}
      <audio ref={audioRef} src="/sounds/ringtone.mp3" preload="auto" />

      {isIncomingCall && !callAccepted && (
        <div className="incoming-call">
          <h2>📞 Llamada entrante...</h2>
          <button onClick={handleAcceptCall}>Aceptar Llamada</button>
          <button onClick={handleDiscreetDeactivate}>Desactivación Discreta</button>
        </div>
      )}

      {callAccepted && (
        <div className="call-active">
          <h2>📱 En llamada con "Contacto de Confianza"</h2>
          <button onClick={handleDiscreetDeactivate}>Finalizar Llamada</button>
        </div>
      )}

      {!isIncomingCall && !callAccepted && (
        <div className="no-call">
          <h2>No hay llamadas entrantes.</h2>
        </div>
      )}
    </div>
  );
};

export default CallSimulation;
