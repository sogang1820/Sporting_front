import React from 'react';
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
    const { image, name, address, selectedDate, selectedTime } = location.state || {};

    const handleGoToMyPage = () => {
        navigate('/mypage');
    };

    return (
        <CenteredWrapper>
            <InfoBlock>
                <Title>예약 완료</Title>
                <br></br>
                <br></br>
                <Image src={image} alt="stadium image" />
                <br />
                <br />
                <h2>{name}</h2>
                <p>{address}</p>
                <p>{selectedDate}</p>
                <p>{selectedTime}</p>
                <MypageButton onClick={handleGoToMyPage}>마이페이지로 가기</MypageButton>
            </InfoBlock>
        </CenteredWrapper>
    );
};

export default Complete;