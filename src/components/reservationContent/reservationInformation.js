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

function InformationPage() {
  return (
    <InfoBlock>
      <Content>
        <h2>name</h2>
      </Content>
    </InfoBlock>
  );
}

export default InformationPage;
/* 
function ReservationInformation() {
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

    fetchStadiumInfo();
  }, [stadiumId]);

  if (!stadiumInfo) {
    return null;
  }

  const { _id, stadium_name, stadium_location, stadium_price, stadium_info } = stadiumInfo;

  return (
    <div>
      <InformationPage
        name={stadiumInfo.stadium_name}
        address={stadiumInfo.stadium_location}
        price={stadiumInfo.stadium_price}
        info={stadiumInfo.stadium_info}
        image={stadiumInfo.stadium_img}
      />
    </div>
  );
}

export default ReservationInformation;
 */