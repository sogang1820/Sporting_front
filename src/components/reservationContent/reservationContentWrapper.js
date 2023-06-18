import React from "react";
import ReservationInformation from "./reservationInformation";
import ReservationBlocks from "./reservationBlocks";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReservationContentWrapper = () => {
  return (
    <Wrapper>
      <ReservationInformation />
      <ReservationBlocks />
    </Wrapper>
  );
};

export default ReservationContentWrapper;
