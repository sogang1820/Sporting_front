import React from "react";
import Header from "../common/header/header";
import Payment from "./paymentContent";
import styled from "styled-components";

const PaymentPage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
            {/* <Header isLoggedIn={isLoggedIn} onLogout={onLogout} /> */}
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
