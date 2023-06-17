import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PaymentText = styled.h2`
  margin-bottom: 20px;
`;

const PaymentPage = () => {
  const location = useLocation();
  const { name, address, selectedDate, selectedTime, price, currentPoints, requiredPoints } =
    location.state || {};

  return (
    <PaymentContainer>
      <PaymentText>Payment Information:</PaymentText>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Date: {selectedDate}</p>
      <p>Time: {selectedTime}</p>
      <p>Price: {price}</p>
      <p>Current Points: {currentPoints}</p>
      <p>Required Points: {requiredPoints}</p>
      {/* Add your payment logic and UI here */}
    </PaymentContainer>
  );
};

export default PaymentPage;
