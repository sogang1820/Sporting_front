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

const MypageButton = styled.button`
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

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 40px;
`;

const Complete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [user_id, setUserId] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const { stadium_img, stadium_name, stadium_location, stadium_info, selectedDate, selectedTime } = location.state || {};

  const urlSearchParams = new URLSearchParams(location.search);
  const stadium_id = urlSearchParams.get('id');
  const [reservationTime, setReservationTime] = useState([]); // 예약 시간 배열로 저장

  useEffect(() => {
    // user 객체의 변경을 감지하여 points 값을 업데이트
    if (user.userInfo) {
      setUserId(user.userInfo.user_id);
      setAccessToken(user.accessToken);
    }
  }, [user]);

  useEffect(() => {
    // selectedTime을 배열로 분할하여 reservationTime 업데이트
    if (selectedTime) {
      const timeArray = selectedTime.split(' - ');
      setReservationTime(timeArray);
    }
  }, [selectedTime]);

  const handleGoToMyPage = () => {
    navigate('/mypage');
  };

  const makeReservation = async () => {
    try {
      const reservationData = {
        user_id: user_id,
        stadium_id: stadium_id,
        date: selectedDate,
        time: reservationTime,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      console.log(reservationData, config);
      const response = await axios.post('http://localhost:8000/reservations', reservationData, config);
      console.log(response.data); // 예약 완료 메시지 확인
    } catch (error) {
      console.error('Error making reservation:', error);
    }
  };

  useEffect(() => {
    if (user_id && accessToken) {
      makeReservation();
    }
  }, [user_id, accessToken]);

  return (
    <CenteredWrapper>
      <InfoBlock>
        <Title>예약 완료</Title>
        <br></br>
        <br></br>
        <Image src={stadium_img} alt="stadium image" />
        <br />
        <br />
        <h2>{stadium_name}</h2>
        <p>{stadium_location}</p>
        <p>날짜: {selectedDate}</p>
        <p>시간: {selectedTime}</p>
        <MypageButton onClick={handleGoToMyPage}>마이페이지로 가기</MypageButton>
      </InfoBlock>
    </CenteredWrapper>
  );
};

export default Complete;