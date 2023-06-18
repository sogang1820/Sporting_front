import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CheckReservationPage from "./checkReservationPage";

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
    max-height: 80%;
    overflow-y: auto;
`;

const CheckReservationModal = ({ onClose }) => {
    const navigate = useNavigate();
    const navigateToMyPage = () => {
        navigate("/");
    };
    const handleButtonClick = () => {
        onClose(); // onClose 함수 호출
        // navigateToMyPage(); // navigateToMyPage 함수 호출

        console.log("i'm done");
    };
    return (
        <ModalWrapper>
            <ModalContent>
                <CheckReservationPage />
                <button onClick={handleButtonClick}>Close</button>
            </ModalContent>
        </ModalWrapper>
    );
};

export default CheckReservationModal;
