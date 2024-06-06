import React from 'react';
import VehicleInfo from '../components/VehicleInfo/VehicleInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './../styles/PaymentCompletedPage.css';

const DeleteVehicleSuccessPage = () => {
  const vehicle = {
    image: "./volvo.png", // Caminho da imagem (certifique-se de que está correto)
    name: "VOLVO S90", // Corrigido para 'name'
    id: "4H9Z8D7J",
  };

  return (
    <div className="payment-completed-page">
        <h1 className="payment-completed-title">Perfeito, Anthony!</h1>
        <p className="payment-completed-message">Seu pagamento foi realizado!</p>
      <VehicleInfo vehicle={vehicle} notShowId = {true} /> {/* Passar o objeto vehicle como prop */}
      <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
    </div>
  );
};

export default DeleteVehicleSuccessPage;
