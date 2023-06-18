import React from "react";
import Header from "../components/common/header/header";
import Complete from "../components/reservationContent/reservationCompleteContent";
import styled from 'styled-components';

const ReservationCompletePage = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Complete />
    </div>
  );
};

export default ReservationCompletePage;
