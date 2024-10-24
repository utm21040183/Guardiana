import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Stats = () => {
  // Datos para el gráfico de barras
  const barData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    datasets: [
      {
        label: 'Incidentes reportados',
        data: [25, 20, 15, 10, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones para el gráfico de barras
  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Datos para el gráfico circular
  const pieData = {
    labels: ['Acoso', 'Robo', 'Violencia física', 'Violencia verbal'],
    datasets: [
      {
        data: [37, 31, 19, 13],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  return (
    <div className="stats-container">
      <h2>Estadísticas de Seguridad Femenina</h2>
      <div className="bar-chart">
        <h3>Incidentes Reportados por Día</h3>
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="pie-chart">
        <h3>Tipos de Incidentes Reportados</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Stats;
