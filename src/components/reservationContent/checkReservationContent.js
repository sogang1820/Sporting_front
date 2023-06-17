import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    margin: 10px 0;
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

const PayButton = styled.button`
  width: 240px;
  background-color: #19204E;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 50px;
  cursor: pointer;
`;

function CheckPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const { name, address, price, image } = location.state || {};

  const [userPoints, setUserPoints] = useState(1000);
  const currentPoints = userPoints;
  const requiredPoints = price - userPoints;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSelectedDate(searchParams.get('date'));
    setSelectedTime(searchParams.get('time'));
  }, [location.search]);

  const handlePayment = () => {
    console.log('Pay button clicked.');

    if (requiredPoints > 0) {
      navigate('/payment', {
        state: {
          name,
          address,
          selectedDate,
          selectedTime,
          price,
          currentPoints,
          requiredPoints
        }
      });
    } else {
      navigate('/reservationComplete', {
        state: {
          image,
          name,
          address,
          price,
          selectedDate,
          selectedTime
        }
      });
    }
  };
  return (
    <CenteredWrapper>
      <InfoBlock>
        <Image src={image} alt="stadium image" />
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{selectedDate}</p>
        <p>{selectedTime}</p>
        <p>{price.endsWith('원') ? price : `${price}원`}</p>
        <br></br>
        <br></br>
        <p>보유 포인트: {userPoints}원</p>
        <p>부족 포인트: {requiredPoints > 0 ? requiredPoints : 0}원</p>
        {requiredPoints > 0 ? (
          <PayButton onClick={handlePayment}>충전하기</PayButton>
        ) : (
          <PayButton onClick={handlePayment}>결제하기</PayButton>
        )}      </InfoBlock>
    </CenteredWrapper>
  );
}

export default CheckPage;
