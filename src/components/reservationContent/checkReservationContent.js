import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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
  const { stadium_name, stadium_location, stadium_price, stadium_img, stadium_info, selectedDate, selectedTime } = location.state || {};

  const [userPoints, setUserPoints] = useState(null);
  const requiredPoints = stadium_price;

  useEffect(() => {
    // userPoints를 추출하는 로직을 작성합니다.
    const accessToken = 'YOUR_ACCESS_TOKEN'; // 액세스 토큰을 적절히 설정합니다.

    const fetchUserPoints = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/points', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setUserPoints(response.data.points);
      } catch (error) {
        console.error('Error fetching user points:', error);
      }
    };

    fetchUserPoints();
  }, []);

  const handlePayment = () => {
    console.log('Pay button clicked.');

    if (requiredPoints > 0) {
      navigate('/payment', {
        state: {
          stadium_name,
          stadium_location,
          selectedDate,
          selectedTime,
          stadium_price,
          userPoints,
          stadium_price
        }
      });
    } else {
      navigate('/reservationComplete', {
        state: {
          stadium_img,
          stadium_name,
          stadium_location,
          stadium_price,
          stadium_info,
          selectedDate,
          selectedTime
        }
      });
    }
  };

  return (
    <CenteredWrapper>
      <InfoBlock>
        <Image src={stadium_img} alt="stadium image" />
        <h2>{stadium_name}</h2>
        <p>{stadium_location}</p>
        <p>{selectedDate}</p>
        <p>{selectedTime}</p>
        <p>{stadium_price}</p>
        <br></br>
        <br></br>
        <p>보유 포인트: {userPoints}원</p>
        <p>필요 포인트: {requiredPoints > 0 ? requiredPoints : 0}원</p>
        {requiredPoints > 0 ? (
          <PayButton onClick={handlePayment}>충전하기</PayButton>
        ) : (
          <PayButton onClick={handlePayment}>결제하기</PayButton>
        )}
      </InfoBlock>
    </CenteredWrapper>
  );
}

export default CheckPage;
