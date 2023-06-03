import React, { useState } from "react";
import TopLeftHeader from "./topLeftHeader";
import TopRightHeader from "./topRightHeader";
import styled from "styled-components";

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <>
            <HeaderWrap>
                <TopLeftHeader />
                <TopRightHeader isLoggedIn={isLoggedIn} onLogout={onLogout} />
            </HeaderWrap>
        </>
    );
};

export default Header;

const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
    height: 60px; /* 원하는 높이로 수정하세요 */
    text-align: center;
`;
