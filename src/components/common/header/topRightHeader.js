import React from "react";
import styled from "styled-components";
import HeaderSignIn from "./headerSignIn";
import HeaderSignUp from "./headerSignUp";
import HeaderUser from "./headerUser";

const TopRightHeader = ({ isLoggedIn, user_id, onLogout }) => {
    console.log(isLoggedIn);

    return (
        <>
            <TopRightHeaderWrap>
                {isLoggedIn ? (
                    <HeaderUser user_id={user_id} />
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
    margin-right: 2rem;
`;
