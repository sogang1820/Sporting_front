<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const PaymentContainer = styled.div`
    width: 50%;
    height: auto;
    background: #f8f6f4;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    margin: auto;
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

const PaymentText = styled.h2`
    margin-bottom: 20px;
    font-size: 40px;
`;

const PointsBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const PointButton = styled.button`
    width: 80px;
    height: 40px;
    margin: 10px 20px;
    background-color: ${({ selected }) => (selected ? "#E6E6E6" : "#FFFFFF")};
    border: 1px solid #000000;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: "GmarketLight", sans-serif;
    cursor: pointer;
`;

const PointInputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const PointInput = styled.input`
    width: 260px;
    height: 40px;
    background: #f8f6f4;
    margin-left: 20px;
    margin-bottom: 5px;
    border: none;
    border-bottom: 1px solid #000000;
    outline: none;
    font-size: 16px;
    font-family: "GmarketLight", sans-serif;
`;

const ChargeButton = styled.button`
    width: 240px;
    background-color: #19204e;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
=======
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const PaymentContainer = styled.div`
  width: 50%;
  height: auto;
  background: #F8F6F4;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  margin: auto;
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

const PaymentText = styled.h2`
  margin-bottom: 20px;
  font-size: 40px;
`;

const PointsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PointButton = styled.button`
  width: 80px;
  height: 40px;
  margin: 10px 20px;
  background-color: ${({ selected }) => (selected ? '#E6E6E6' : '#FFFFFF')};;
  border: 1px solid #000000;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: 'GmarketLight', sans-serif;
  cursor: pointer;
`;

const PointInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const PointInput = styled.input`
  width: 260px;
  height: 40px;
  background: #F8F6F4;
  margin-left: 20px;
  margin-bottom: 5px;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
  font-size: 16px;
  font-family: 'GmarketLight', sans-serif;
`;

const ChargeButton = styled.button`
  width: 240px;
  background-color: #19204E;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
>>>>>>> 00c806e8066ed394e1515f287048a80be303c1a6
`;

const PaymentPage = () => {
    const location = useLocation();
<<<<<<< HEAD
    const {
        name,
        address,
        selectedDate,
        selectedTime,
        price,
        currentPoints,
        requiredPoints,
    } = location.state || {};

    const [chargePoints, setChargePoints] = useState("");
    const [selectedPoint, setSelectedPoint] = useState(null);

    const handleCarge = () => {
        console.log(
            "Charge button clicked. Points:",
            chargePoints || selectedPoint
        );
=======
    const { name, address, selectedDate, selectedTime, price, currentPoints, requiredPoints } =
        location.state || {};

    const [chargePoints, setChargePoints] = useState('');
    const [selectedPoint, setSelectedPoint] = useState(null);

    const handleCarge = () => {
        console.log('Charge button clicked. Points:', chargePoints || selectedPoint);
>>>>>>> 00c806e8066ed394e1515f287048a80be303c1a6
    };

    const handlePointSelection = (point) => {
        if (selectedPoint === point) {
            setSelectedPoint(null);
<<<<<<< HEAD
            setChargePoints("");
        } else {
            setSelectedPoint(point);
            setChargePoints("");
=======
            setChargePoints('');
        } else {
            setSelectedPoint(point);
            setChargePoints('');
>>>>>>> 00c806e8066ed394e1515f287048a80be303c1a6
        }
    };

    return (
        <CenteredWrapper>
            <PaymentContainer>
                <PaymentText>충전 정보</PaymentText>
                <p>보유 포인트: {currentPoints}</p>
                <p>필요 포인트: {requiredPoints}</p>
                <PointsBlock>
<<<<<<< HEAD
                    {[10000, 30000, 50000, 60000, 80000, 100000].map(
                        (point) => (
                            <PointButton
                                key={point}
                                selected={selectedPoint === point}
                                onClick={() => handlePointSelection(point)}
                            >
                                {point}
                            </PointButton>
                        )
                    )}
=======
                    {[10000, 30000, 50000, 60000, 80000, 100000].map((point) => (
                        <PointButton
                            key={point}
                            selected={selectedPoint === point}
                            onClick={() => handlePointSelection(point)}
                        >
                            {point}
                        </PointButton>
                    ))}
>>>>>>> 00c806e8066ed394e1515f287048a80be303c1a6
                </PointsBlock>
                <PointInputContainer>
                    <p>직접 입력:</p>
                    <PointInput
                        type="string"
                        value={chargePoints}
                        onChange={(e) => setChargePoints(e.target.value)}
                    />
                </PointInputContainer>
                <ChargeButton onClick={handleCarge}>충전하기</ChargeButton>
            </PaymentContainer>
        </CenteredWrapper>
    );
};

export default PaymentPage;
