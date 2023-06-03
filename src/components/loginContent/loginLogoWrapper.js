import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import LoginLogoImg from "../../assets/img/logo.png";
const LoginLogoWrapper = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };
    return (
        <>
            <Wrapper>
                <img
                    src={LoginLogoImg}
                    alt="Login Logo"
                    onClick={handleClick}
                />
            </Wrapper>
        </>
    );
};
export default LoginLogoWrapper;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* margin-inline: auto;
    display: grid;
    place-items: center; */
    /* height: 50vh; 페이지의 높이에 맞게 조정 */
`;
