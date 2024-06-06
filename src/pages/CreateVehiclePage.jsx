import React, { useState } from 'react';
import './../styles/CreateVehiclePage.css';

const CreateVehiclePage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [vehicle, setVehicle] = useState(null);

  const vehicles = [
    { model: 'Tesla Model S', connector: 'Type 2', battery: '100 kWh' },
    { model: 'Nissan Leaf', connector: 'CHAdeMO', battery: '40 kWh' },
    { model: 'BMW i3', connector: 'CCS Combo', battery: '42.2 kWh' }
  ];

  const handleVehicleChange = (event) => {
    const selectedModel = event.target.value;
    setSelectedVehicle(selectedModel);
    const vehicleInfo = vehicles.find(vehicle => vehicle.model === selectedModel);
    setVehicle(vehicleInfo);
  };

  return (
    <div className="add-vehicle-page">
      <img src="./logo.png" alt="Logo" className="logo" />
      <h1 className="header-text">Estamos quase lá! Selecione o modelo do seu veículo.</h1>
      <div className="selector-container">
        <label className="selector-label" htmlFor="vehicle-selector">Marca e Modelo do Veículo</label>
        <select id="vehicle-selector" value={selectedVehicle} onChange={handleVehicleChange}>
          <option value="">Selecione um veículo</option>
          {vehicles.map((vehicle, index) => (
            <option key={index} value={vehicle.model}>{vehicle.model}</option>
          ))}
        </select>
      </div>
      {vehicle && (
        <div className="info-containers">
          <div className="info-box">
            <label className="info-label">Tipo de Conector Utilizado</label>
            <p className="info-content">{vehicle.connector}</p>
          </div>
          <div className="info-box">
            <label className="info-label">Capacidade de Bateria</label>
            <p className="info-content">{vehicle.battery}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateVehiclePage;
