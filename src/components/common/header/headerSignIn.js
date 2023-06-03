import React from "react";
import styled from "styled-components";

const HeaderSignIn = () => {
    return (
        <>
            <HeaderSignInIcon>로그인</HeaderSignInIcon>
        </>
    );
};

export default HeaderSignIn;

const HeaderSignInIcon = styled.div`
    width: 4rem;
    height: 100%;
    margin-left: 1.5rem;
    background-size: cover;
    @media (max-width: 612px) {
        display: none;
    }
    font-weight: 800;
    font-size: 1rem;
    padding-top: 1rem;

    cursor: pointer;
`;
