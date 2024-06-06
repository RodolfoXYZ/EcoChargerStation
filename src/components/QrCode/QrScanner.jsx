import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import "./QrCode.css";

const QrScannerComponent = () => {
  const [data, setData] = useState(null);
  const [auth, setAuth] = useState(false);

  const handleScan = (result) => {
    console.log('QR code detectado:', result);
    setData(result);
    if (result !== null) {
      setTimeout(() => {
        console.log('Autorizando pagamento após 5 segundos...');
        setAuth(true);
      }, 5000);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  console.log('Data:', data);
  console.log('Auth:', auth);

  return (
    <div className="container scanner">
      <QrScanner
        delay={300}
        style={{ height: '100%', width: '100%' }}
        onError={handleError}
        onScan={handleScan}
        className="preview"
      />
      {data == null && (
        <>
          <div className="overlay top">
            <span>Escaneie o QR CODE</span>
          </div>
          <div className="overlay bottom">
            <span>Para autorizar o pagamento</span>
          </div>
          <div className="overlay left"></div>
          <div className="overlay right"></div>
          <div className="central-square"></div>
        </>
      )}
      {data != null && (
        <div className="overlay-all">
          {!auth ? (
            <>
              <img className="loading" src="./loading.png" alt="" />
              <span>UM MINUTO, ESTAMOS AUTORIZANDO SUA RECARGA...</span>
            </>
          ) : (
            <>
              <img src="./checkbox.png" alt="" />
              <span>AUTORIZADO</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default QrScannerComponent;
