import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './../styles/SuccessPage.css';

const SuccessPage = () => {
  return (
    <div className="success-page">
      <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
      <p className="success-message">Cadastro efetuado com sucesso!</p>
    </div>
  );
};

export default SuccessPage;
