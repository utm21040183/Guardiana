
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./RiskMap.css"

const RiskMap = () => {
  useEffect(() => {
    // Verifica si el mapa ya existe, y si es así, elimínalo antes de crear uno nuevo.
    if (L.DomUtil.get('map') !== null) {
      L.DomUtil.get('map')._leaflet_id = null;
    }

    const map = L.map("map").setView([21.8853, -102.2916], 13); // Coordenadas de Aguascalientes

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Ejemplo de zonas con diferentes niveles de riesgo
    const zonasRiesgo = [
      { lat: 21.8893, lng: -102.2956, riesgo: "alto" },
      { lat: 21.8813, lng: -102.2816, riesgo: "medio" },
      { lat: 21.8753, lng: -102.3016, riesgo: "bajo" }
    ];

    zonasRiesgo.forEach((zona) => {
      const color = zona.riesgo === "alto" ? "red" : zona.riesgo === "medio" ? "yellow" : "green";
      L.circle([zona.lat, zona.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        radius: 500, // Radio de la zona de riesgo
      }).addTo(map);
    });

    // Cleanup para cuando el componente se desmonte
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default RiskMap;
