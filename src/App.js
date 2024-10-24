import React from 'react';
import Navbar from './components/Navbar';
import GeoLocation from './components/GeoLocation';
import HelpLines from './components/HelpLines';
import Predictions from './components/Predictions';
import Tabs from './components/Tabs';
import MapTab from './components/MapTab';
import Audio from './components/Audio'; 
import CallSimulation from './components/CallSimulation';
import SafetyGuide from './components/SafetyGuide'; 
import Stats from './components/Stats'; // Componente para las estadísticas con gráficos
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
          <Predictions /> {/* Pestaña para predicciones */}
        </div>
        <div label="Líneas de Ayuda">
          <HelpLines />
        </div>
        <div label="Grabación de Audio"> 
          <Audio /> 
        </div>
        <div label="Simulación de Llamadas">
          <CallSimulation /> {/* Simulación de llamadas */}
        </div>
        <div label="Guía de Seguridad"> 
          <SafetyGuide /> {/* Guía de seguridad */}
        </div>
        <div label="Estadísticas"> {/* Nueva pestaña solo para estadísticas */}
          <Stats /> {/* Componente de estadísticas con gráficos */}
        </div>
      </Tabs>
      <GeoLocation />
    </div>
  );
};

export default App;
