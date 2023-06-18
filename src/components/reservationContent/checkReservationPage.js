import React from "react";
import Header from "../common/header/header";
import Check from "./checkReservationContent";
import styled from "styled-components";

const CheckReservationPage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
            {/* <Header isLoggedIn={isLoggedIn} onLogout={onLogout} /> */}
            <Wrapper>
                <Check />
            </Wrapper>
        </div>
    );
};

export default CheckReservationPage;
const Wrapper = styled.div`
    height: 80vh;
`;
