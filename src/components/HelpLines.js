import React from 'react';
import './HelpLines.css'; 

const HelpLines = () => {
  return (
    <div className="help-lines-container">
      <h3>Líneas de Ayuda:</h3>
      <div className="help-line-card">
        <a href="https://wa.link/iidnrc" className="help-line">
          Línea de Ayuda 1
        </a>
      </div>
      <div className="help-line-card">
        <a href="https://wa.link/iidnrc" className="help-line">
          Línea de Ayuda 2
        </a>
      </div>
     
    </div>
  );
};

export default HelpLines;
