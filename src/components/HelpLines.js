import React from 'react';
import './HelpLines.css'; 

const HelpLines = () => {
  return (
    <div className="help-lines-container">
      <h3>Líneas de Ayuda:</h3>
      <div className="help-line-card">
        <a href="https://wa.link/iidnrc" className="help-line">
          Mamá 
        </a>
      </div>
      <div className="help-line-card">
        <a href="https://wa.link/iidnrc" className="help-line">
          Papá
        </a>
      </div>
      <div className="help-line-card">
        <a href="https://wa.link/iidnrc" className="help-line">
          Agregar más...
        </a>
      </div>
     
    </div>
  );
};

export default HelpLines;
