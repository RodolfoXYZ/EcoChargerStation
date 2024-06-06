import React from 'react';
import './../styles/PixPaymentPage.css';

const PixPaymentPage = () => {
  const qrCodeImage = "./qrcode.png";
  const expiryTime = 60;

  const copyPixCode = () => {
    const pixCode = "00020101021226880014BR.GOV.BCB.PIX2573pix-key@banco.com.br5204000053039865405100.005802BR5925Nome do Recebedor6009Cidade70080002BR5902BR"; // Substitua pelo código PIX real
    navigator.clipboard.writeText(pixCode);
    alert("Código PIX copiado para a área de transferência!");
  };

  return (
    <div className="pix-payment-page">
      <h1 className="page-title">PAGAMENTO VIA PIX</h1>
      <div className="payment-qrcode">
        <p className="expiry-time">Expira em {expiryTime}s</p>
        <img src={qrCodeImage} alt="QR Code" className="qr-code" />
        <button className="copy-pix-code-button" onClick={copyPixCode}>
        COPIAR CÓDIGO PIX
      </button>
      </div>
    </div>
  );
};

export default PixPaymentPage;
