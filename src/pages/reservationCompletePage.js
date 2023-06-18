import React from "react";
import Header from "../components/common/header/header";
import Complete from "../components/reservationContent/reservationCompleteContent";
<<<<<<< HEAD
import styled from "styled-components";

const ReservationCompletePage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
            <Complete />
        </div>
    );
=======
import styled from 'styled-components';

const ReservationCompletePage = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Complete />
    </div>
  );
>>>>>>> 00c806e8066ed394e1515f287048a80be303c1a6
};

export default ReservationCompletePage;
