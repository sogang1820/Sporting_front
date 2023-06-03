import React from "react";
import styled from "styled-components";
import HeaderLogo from "./headerLogo";
import HideMenu from "./hideMenu";

const TopLeftHeader = () => {
    return (
        <>
            <TopLeftHeaderWrap>
                <HideMenu />
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
