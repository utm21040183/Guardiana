
import React from 'react';
import Navbar from './components/Navbar';
import PanicButton from './components/PanicButton';
import GeoLocation from './components/GeoLocation';
import HelpLines from './components/HelpLines';
import Predictions from './components/Predictions';
import Tabs from './components/Tabs';
import MapTab from './components/MapTab';
import Audio from './components/Audio'; 
import CallSimulation from './components/CallSimulation';
import SafetyGuide from './components/SafetyGuide'; 
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Tabs>
        <div label="Mapa">
          <MapTab />
        </div>
        <div label="Predicciones">
          <Predictions />
        </div>
        <div label="Líneas de Ayuda">
          <HelpLines />
        </div>
        <div label="Grabación de Audio"> 
          <Audio /> 
        </div>
        <div label="Simulación de Llamadas">
          <CallSimulation /> {/* Agregar la simulación de llamadas aquí */}
        </div>
        <div label="Guía de Seguridad"> {/* Nueva pestaña */}
          <SafetyGuide />
        </div>
      </Tabs>
      <GeoLocation />
      <PanicButton />
    </div>
  );
};

export default App;
