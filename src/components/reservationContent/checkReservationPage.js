import React from "react";
import Check from "./checkReservationContent";
import styled from "styled-components";

const CheckReservationPage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
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