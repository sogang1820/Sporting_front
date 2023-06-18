import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const InfoBlock = styled.div`
  width: 90%;
  height: auto;
  background: #F8F6F4;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  position: relative;
  margin: 0 auto;
  padding-left: 50px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  font-family: 'GmarketMedium', sans-serif;
  font-size: 18px;
`;

const Image = styled.img`
  width: 160px;
  margin-right: 20px;
  object-fit: cover;
`;

const Content = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 0.1;
`;

const InformationPage = () => {
  const location = useLocation();
  const [stadiumInfo, setStadiumInfo] = useState(null);
  const queryParams = new URLSearchParams(location.search);
  const stadiumId = queryParams.get('id');

  useEffect(() => {
    const fetchStadiumInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/stadiums/${stadiumId}`);
        setStadiumInfo(response.data);
      } catch (error) {
        console.error('Error fetching stadium data:', error);
      }
    };

    if (stadiumId) {
      fetchStadiumInfo();
    }
  }, [stadiumId]);

  if (!stadiumInfo) {
    return <div>Loading...</div>;
  }

  const { stadium_name, stadium_location, stadium_price, stadium_info, stadium_img } = stadiumInfo;

  return (
    <InfoBlock>
      <Image src={stadium_img} alt="stadium image" />
      <Content>
        <h2>{stadium_name}</h2>
        <p>주소: {stadium_location}</p>
        <p>가격: {stadium_price}원</p>
        <p>정보: {stadium_info}</p>
      </Content>
    </InfoBlock>
  );
};

export default InformationPage;
