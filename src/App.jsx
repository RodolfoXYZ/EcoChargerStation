import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/app.css';
import CreateVehicleSuccessPage from './pages/CreateVehicleSuccessPage';
import DeleteVehicleSuccessPage from './pages/DeleteVehicleSuccessPage';
import SuccessPage from './pages/SuccessPage';
import PixPaymentPage from './pages/PixPaymentPage';
import SideBarPage from './pages/SideBarPage';
import CreateVehiclePage from './pages/CreateVehiclePage';
import DeleteVehiclePage from './pages/DeleteVehiclePage';
import PaymentCompletedPage from './pages/PaymentCompletedPage';
import QrScannerComponent from './components/QrCode/QrScanner';

function App() {
  const rotas = createBrowserRouter([
    {
      path: "/SuccessPage", 
      element: <SuccessPage></SuccessPage>
    },
    
    {
      path: "/CreateVehicleSuccessPage", 
      element: <CreateVehicleSuccessPage></CreateVehicleSuccessPage>
    },

    {
      path: "/DeleteVehicleSuccessPage", 
      element: <DeleteVehicleSuccessPage></DeleteVehicleSuccessPage>
    },

    {
      path: "/PixPaymentPage", 
      element: <PixPaymentPage></PixPaymentPage>
    },

    {
      path: "/SideBarPage", 
      element: <SideBarPage></SideBarPage>
    },

    {
      path: "/CreateVehiclePage", 
      element: <CreateVehiclePage></CreateVehiclePage>
    },

    {
      path: "/DeleteVehiclePage", 
      element: <DeleteVehiclePage></DeleteVehiclePage>
    },

    {
      path: "/PaymentCompletedPage", 
      element: <PaymentCompletedPage></PaymentCompletedPage>
    },

    {
      path: "/QrScannerPage", 
      element: <QrScannerComponent></QrScannerComponent>
    },
  ])
  return (
    <RouterProvider router = {rotas}></RouterProvider>
  );
}

export default App;
