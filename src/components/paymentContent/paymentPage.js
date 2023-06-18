import React from "react";
import Payment from "./paymentContent";
import styled from "styled-components";

const PaymentPage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
            <Wrapper>
                <Payment />
            </Wrapper>
        </div>
    );
};

export default PaymentPage;

const Wrapper = styled.div`
    height: 80vh;
`;
