import React from "react";
import Header from "../components/common/header/header";
import CheckPage from "../components/reservationContent/checkReservationContent";
import styled from 'styled-components';

const CheckReservationPage = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <CheckPage />
    </div>
  );
};

export default CheckReservationPage;
