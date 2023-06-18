import React from "react";
import Header from "../components/common/header/header";
import ReservationContentWrapper from "../components/reservationContent/reservationContentWrapper";
import styled from 'styled-components';

const ReservationPage = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <ReservationContentWrapper />
    </div>
  );
};

export default ReservationPage;
