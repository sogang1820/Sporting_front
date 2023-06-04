import React from "react";
import styled from "styled-components";
import HeaderLogo from "./headerLogo";
import HideMenu from "./hideMenu";

const TopLeftHeader = ({ isLoggedIn, onLogout }) => {
    return (
        <>
            <TopLeftHeaderWrap>
                <HideMenu isLoggedIn={isLoggedIn} onLogout={onLogout} />
                <HeaderLogo />
            </TopLeftHeaderWrap>
        </>
    );
};

export default TopLeftHeader;

const TopLeftHeaderWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;
