import React from 'react';
import VehicleInfo from '../components/VehicleInfo/VehicleInfo';
import './../styles/CreateVehicleSuccessPage.css';

const CreateVehicleSuccessPage = () => {
  const vehicle = {
    image: "./volvo.png", // Caminho da imagem (certifique-se de que está correto)
    name: "VOLVO S90", // Corrigido para 'name'
    id: "4H9Z8D7J",
  };

  return (
    <div className="create-success-page">
      <VehicleInfo vehicle={vehicle} /> {/* Passar o objeto vehicle como prop */}
      <p className="create-success-message">VEÍCULO CADASTRADO COM SUCESSO!</p>
    </div>
  );
};

export default CreateVehicleSuccessPage;
