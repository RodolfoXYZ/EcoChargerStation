import React from 'react';
import './../styles/SideBar.css';

const SideBarPage = () => {
  return (
    <div className="sidebar">
      <img src="./logo.png" alt="Logo" className="sidebar-logo" />
      <hr className="divider" />
      <div className="sidebar-item">VOLTAR</div>
      <hr className="divider" />
      <div className="sidebar-item">MEUS VEÍCULOS</div>
      <hr className="divider" />
      <div className="sidebar-item">MINHAS RECARGAS</div>
      <hr className="divider" />
      <div className="sidebar-item">HISTÓRICO DE RECARGAS</div>
      <hr className="divider" />
      <div className="sidebar-item">SAIR</div>
      <hr className="divider" />
    </div>
  );
};

export default SideBarPage;
