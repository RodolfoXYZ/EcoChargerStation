import React, { useState } from 'react';
import VehicleInfo from '../components/VehicleInfo/VehicleInfo';
import './../styles/DeleteVehiclePage.css';

const DeleteVehiclePage = () => {
  const vehicle = {
    image: "./volvo.png", // Caminho da imagem (certifique-se de que está correto)
    name: "VOLVO S90", // Corrigido para 'name'
    id: "4H9Z8D7J",
  };


  function deleteVehicle(){

  };

  function returnBeforePage(){

  };

  return (
    <div className="delete-vehicle-page">
      <VehicleInfo vehicle={vehicle} /> {/* Passar o objeto vehicle como prop */}
      <p className="delete-vehicle-message">Deseja deletar o cadastro desse veículo?</p>
      <div className="delete-buttons">
      <button className="generic-button" onClick={deleteVehicle}>Sim</button>
      <button className="generic-button not-delete" onClick={returnBeforePage}>Não</button>
      </div>
    </div>
  );
};

export default DeleteVehiclePage;
