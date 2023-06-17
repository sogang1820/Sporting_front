import React from "react";
import Header from "../components/common/header/header";
import Confirmation from "../components/reservationContent/confirmationContent";
import styled from 'styled-components';

const ConfirmationPage = () => {
  return (
    <div>
      <Header />
      <Confirmation />
    </div>
  );
};

export default ConfirmationPage;
