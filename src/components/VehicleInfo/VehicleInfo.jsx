import React from 'react';
import './VehicleInfo.css';

const VehicleInfo = ({ vehicle, notShowId }) => {
  return (
    <div className="vehicle-info">
      <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
      <h1 className="vehicle-name">{vehicle.name}</h1>
      {!notShowId && <p className="vehicle-id">ID: {vehicle.id}</p>}
    </div>
  );
};

export default VehicleInfo;
