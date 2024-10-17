// src/components/Audio.js
import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import './Audio.css'; // Estilos personalizados

const Audio = () => {
  const [record, setRecord] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  
  // Iniciar la grabación
  const startRecording = () => {
    setRecord(true);
  };

  // Detener la grabación
  const stopRecording = () => {
    setRecord(false);
  };

  // Pausar la grabación
  const pauseRecording = () => {
    // La pausar real de grabación de audio es compleja,
    // pero este es solo un ejemplo visual
    setRecord(false);
  };

  // Continuar grabación
  const continueRecording = () => {
    setRecord(true);
  };

  // Cuando la grabación se detiene, se genera un blob con los datos del audio.
  const onStop = (recordedBlob) => {
    setAudioURL(URL.createObjectURL(recordedBlob.blob));
  };

  return (
    <div className="audio-recorder">
      <h2>Grabación</h2>

      {/* Componente para grabar y mostrar las ondas de sonido */}
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        strokeColor="#FF4081"
        backgroundColor="#FFFFFF"
      />

      {/* Botones de control de grabación */}
      <div className="controls">
        {!record ? (
          <button onClick={startRecording} className="record-btn">Iniciar Grabación</button>
        ) : (
          <button onClick={stopRecording} className="stop-btn">Detener Grabación</button>
        )}
        <button onClick={pauseRecording} className="pause-btn">Pausar</button>
        <button onClick={continueRecording} className="continue-btn">Continuar</button>
      </div>

      {/* Si hay un audio grabado, mostrar el enlace para reproducirlo */}
      {audioURL && (
        <div className="audio-player">
          <h3>Grabación guardada:</h3>
          <audio controls src={audioURL}></audio>
        </div>
      )}
    </div>
  );
};

export default Audio;
