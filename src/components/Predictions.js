import React, { useState, useEffect, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import './Predictions.css';

const Predictions = () => {
  const [selectedColonia, setSelectedColonia] = useState("Colonia Aguascalientes Centro");

  // Memoriza el array de colonias para evitar que se recree en cada render
  const colonias = useMemo(() => [
    { name: "Colonia Aguascalientes Centro", riskLevel: "Rojo", lat: 21.8833, lng: -102.2916 },
    { name: "Fraccionamiento San Cayetano", riskLevel: "Amarillo", lat: 21.8874, lng: -102.2956 },
    { name: "Fraccionamiento Colinas del Río", riskLevel: "Amarillo", lat: 21.8802, lng: -102.2930 },
    { name: "Colonia Olivares Santana", riskLevel: "Rojo", lat: 21.8803, lng: -102.2942 },
    { name: "Fraccionamiento Las Brisas", riskLevel: "Verde", lat: 21.8765, lng: -102.2998 },
    { name: "Fraccionamiento Ramón Romo Franco", riskLevel: "Amarillo", lat: 21.8851, lng: -102.2842 },
    { name: "Colonia Gremial", riskLevel: "Rojo", lat: 21.8825, lng: -102.2967 },
    { name: "Colonia Industrial", riskLevel: "Amarillo", lat: 21.8901, lng: -102.2849 },
    { name: "Colonia Altavista", riskLevel: "Verde", lat: 21.8819, lng: -102.2924 },
    { name: "Fraccionamiento La Concordia", riskLevel: "Amarillo", lat: 21.8786, lng: -102.2983 },
    { name: "Colonia Miravalle", riskLevel: "Amarillo", lat: 21.8753, lng: -102.2887 },
    { name: "Colonia San Pablo", riskLevel: "Amarillo", lat: 21.8884, lng: -102.2913 },
    { name: "Colonia México", riskLevel: "Rojo", lat: 21.8836, lng: -102.2897 },
    { name: "Colonia Guadalupe", riskLevel: "Amarillo", lat: 21.8852, lng: -102.2856 },
  ], []); // Solo se crea una vez

  useEffect(() => {
    let map = null;
    if (L.DomUtil.get("map") !== null) {
      L.DomUtil.get("map")._leaflet_id = null; // Limpieza previa
    }

    const selected = colonias.find((colonia) => colonia.name === selectedColonia);

    map = L.map("map").setView([selected.lat, selected.lng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Añadir el círculo que indica el nivel de riesgo
    L.circle([selected.lat, selected.lng], {
      color: selected.riskLevel === "Rojo" ? "red" : selected.riskLevel === "Amarillo" ? "yellow" : "green",
      fillColor: selected.riskLevel === "Rojo" ? "red" : selected.riskLevel === "Amarillo" ? "yellow" : "green",
      fillOpacity: 0.5,
      radius: 500,
    })
      .bindPopup(`${selected.name} - Riesgo ${selected.riskLevel}`)
      .addTo(map);

    // Limpieza al desmontar el componente o cambiar de colonia
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [selectedColonia, colonias]); // `colonias` es estable debido a `useMemo`

  return (
    <div className="predictions">
      <h2>Predicciones de Riesgo</h2>
      <label htmlFor="colonia-select">Selecciona una colonia:</label>
      <select
        id="colonia-select"
        value={selectedColonia}
        onChange={(e) => setSelectedColonia(e.target.value)}
      >
        {colonias.map((colonia, index) => (
          <option key={index} value={colonia.name}>
            {colonia.name}
          </option>
        ))}
      </select>

      <div id="map" style={{ height: "400px", marginTop: "20px" }}></div>
    </div>
  );
};

export default Predictions;
