import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PaymentPage from "./paymentPage";

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    & > button{
        
    }
`;

const PaymentModal = ({ onClose }) => {
    const navigate = useNavigate();
    const navigateToMyPage = () => {
        navigate("/mypage");
    };
    const handleButtonClick = () => {
        navigateToMyPage(); // navigateToMyPage 함수 호출
        onClose(); // onClose 함수 호출

        console.log("i'm done");
    };
    return (
        <ModalWrapper>
            <ModalContent>
                <PaymentPage />
                <button onClick={handleButtonClick}>Close</button>
            </ModalContent>
        </ModalWrapper>
    );
};

export default PaymentModal;
