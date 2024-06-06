import React from 'react';
import VehicleInfo from '../components/VehicleInfo/VehicleInfo';
import './../styles/DeleteVehicleSuccessPage.css';

const DeleteVehicleSuccessPage = () => {
  const vehicle = {
    image: "./volvo.png", // Caminho da imagem (certifique-se de que está correto)
    name: "VOLVO S90", // Corrigido para 'name'
    id: "4H9Z8D7J",
  };

  return (
    <div className="delete-success-page">
      <VehicleInfo vehicle={vehicle} /> {/* Passar o objeto vehicle como prop */}
      <p className="delete-success-message">DELETADO COM SUCESSO!</p>
    </div>
  );
};

export default DeleteVehicleSuccessPage;
