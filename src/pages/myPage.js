import React, { useEffect } from "react";
import Header from "../components/common/header/header";
import MyPageContentWrapper from "../components/myPageContent/myPageContentWrapper";
import MyPageReservation from "../components/myPageContent/myPageReservation";
import { styled } from "styled-components";

const MyPage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
            <Wrapper>
                <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
                <MyPageContentWrapper />
            </Wrapper>
        </div>
    );
};

export default MyPage;

const Wrapper = styled.div`
    height: 100vh;
`;
