import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
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

function CheckPage({ onLogin }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, selectedTime } = location.state || {};
  const [stadium, setStadium] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const [points, setPoints] = useState(null); // 초기값은 null로 설정
  const { id, date, time } = location.search.slice(1)
  .split('&')
  .reduce((acc, curr) => {
    const [key, value] = curr.split('=');
    acc[key] = value;
    return acc;
  }, {});

  useEffect(() => {
    // user 객체의 변경을 감지하여 points 값을 업데이트
    if (user.userInfo) {
        setPoints(user.userInfo.points);
    }
}, [user]);

useEffect(() => {
  const fetchStadiumInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/stadiums/${id}`);
      setStadium(response.data);
    } catch (error) {
      console.error('Error fetching stadium data:', error);
    }
  };

  if (id) {
    fetchStadiumInfo();
  }
}, [id]);

if (!stadium) {
  return (
    <CenteredWrapper>
      <p>Loading stadium information...</p>
    </CenteredWrapper>
  );
}

const { stadium_name, stadium_location, stadium_price, stadium_img } = stadium;
const lackingPoints =  stadium_price - points;

const handlePayment = () => {
  console.log('Pay button clicked.');

  if (lackingPoints > 0) {
    navigate('/payment', {
      state: {
        stadium_name: stadium.stadium_name,
        stadium_location: stadium.stadium_location,
        selectedDate: date,
        selectedTime: time,
        stadium_price: stadium.stadium_price,
        points: stadium.points
      }
    });
  } else {
    navigate('/reservationComplete', {
      state: {
        id: stadium.id,
        stadium_img: stadium.stadium_img,
        stadium_name: stadium.stadium_name,
        stadium_location: stadium.stadium_location,
        stadium_price: stadium.stadium_price,
        stadium_info: stadium.stadium_info,
        selectedDate: date,
        selectedTime: time
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
        <p>날짜: {selectedDate}</p>
        <p>시간: {selectedTime}</p>
        <p>가격: {stadium_price}</p>
        <br></br>
        <br></br>
        <p>보유 포인트: {points}원</p>
        {lackingPoints > 0 ? (
          <PayButton onClick={handlePayment}>충전하기</PayButton>
        ) : (
          <PayButton onClick={handlePayment}>결제하기</PayButton>
        )}
      </InfoBlock>
    </CenteredWrapper>
  );
}

export default CheckPage;
