import React from "react";
import styled from "styled-components";

const HeaderSignUp = () => {
    return (
        <>
            <HeaderSignUpIcon>회원가입</HeaderSignUpIcon>
        </>
    );
};

export default HeaderSignUp;

const HeaderSignUpIcon = styled.div`
    width: 5rem;
    height: 100%;
    margin-left: 1rem;
    margin-right: 1rem;
    background-size: cover;
    @media (max-width: 612px) {
        display: none;
    }
    font-weight: 800;
    font-size: 1rem;
    padding-top: 1rem;
    cursor: pointer;
`;
