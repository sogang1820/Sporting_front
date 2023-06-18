import React from "react";
import Header from "../components/common/header/header";
import Check from "../components/reservationContent/checkReservationContent";
import styled from "styled-components";

const CheckReservationPage = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Check />
    </div>
  );
};

export default CheckReservationPage;
