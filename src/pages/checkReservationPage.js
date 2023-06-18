import React from "react";
import Header from "../components/common/header/header";
import Check from "../components/reservationContent/checkReservationContent";
import styled from "styled-components";

<<<<<<< HEAD
const CheckReservationPage = () => {
    return (
        <div>
            <Header />
            <Check />
        </div>
    );
=======
const CheckReservationPage = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Check />
    </div>
  );
>>>>>>> 00c806e8066ed394e1515f287048a80be303c1a6
};

export default CheckReservationPage;
