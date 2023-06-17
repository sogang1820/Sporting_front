import React from "react";
import Header from "../components/common/header/header";
import Information from "../components/reservationContent/informationContent";
import Reservation from "../components/reservationContent/reservationContent";
import styled from 'styled-components';

const ReservationPage = ({ isLoggedIn, onLogout }) => {
  return (
      <div>
          <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
          <Information />
          <Reservation />
      </div>
  );
};

export default ReservationPage;
