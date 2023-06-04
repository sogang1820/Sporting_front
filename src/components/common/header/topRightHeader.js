import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import HeaderSignIn from "./headerSignIn";
import HeaderSignUp from "./headerSignUp";
import HeaderUser from "./headerUser";

const TopRightHeader = ({ isLoggedIn, username, onLogout }) => {
    console.log(isLoggedIn);
    return (
        <>
            <TopRightHeaderWrap>
                {isLoggedIn ? (
                    <HeaderUser username={username} />
                ) : (
                    <>
                        <HeaderSignIn />
                        <HeaderSignUp />
                    </>
                )}
            </TopRightHeaderWrap>
        </>
    );
};

export default TopRightHeader;

const TopRightHeaderWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;
