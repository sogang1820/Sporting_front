import React from "react";
import Header from "../components/common/header/header";
import StadiumContentWrapper from "../components/stadiumContent/stadiumContentWrapper";
import styled from 'styled-components';

const StadiumsPage = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <StadiumContentWrapper />
    </div>
  );
};

export default StadiumsPage;
