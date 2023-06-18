import React from 'react';
import styled from 'styled-components';

const InfoBlock = styled.div`
  width: 50%;
  height: auto;
  background: #F8F6F4;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  p {
    margin: 10px 0;  // Adjust this value to your liking.
  }
`;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
  width: 240px;
  object-fit: cover;
`;

function ConfirmationSection({ image, name, address, selectedDate, selectedTime, price }) {
  return (
    <CenteredWrapper>
      <InfoBlock>
        <Image src={image} alt="stadium image" />
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{selectedDate}</p>
        <p>{selectedTime}</p>
        <p>{price}</p>
      </InfoBlock>
    </CenteredWrapper>
  );
}

export default ConfirmationSection;
