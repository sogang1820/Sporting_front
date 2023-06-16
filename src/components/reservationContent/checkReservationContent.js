import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StadiumImage from "../../assets/img/logo.png";
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
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const { name, address, price, image } = location.state || {};

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setSelectedDate(searchParams.get('date'));
        setSelectedTime(searchParams.get('time'));
    }, [location.search]);

    const handlePayment = () => {
        // Payment logic goes here
        console.log('Pay button clicked.');
    };

    return (
        <CenteredWrapper>
            <InfoBlock>
                <Image src={image} alt="stadium image" />
                <h2>{name}</h2>
                <p>{address}</p>
                <p>{selectedDate}</p>
                <p>{selectedTime}</p>
                <p>{price}</p>
                <PayButton onClick={handlePayment}>결제하기</PayButton>

            </InfoBlock>
        </CenteredWrapper>
    );
}

export default CheckPage;
