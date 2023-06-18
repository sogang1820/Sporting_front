import React from "react";
import styled from "styled-components";
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
`;

const PaymentModal = ({ onClose }) => {
    return (
        <ModalWrapper>
            <ModalContent>
                <PaymentPage />
                <button onClick={onClose}>Close</button>
            </ModalContent>
        </ModalWrapper>
    );
};

export default PaymentModal;
