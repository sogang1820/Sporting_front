import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import HeaderLogoImg from "../../../assets/img/logo.png";
const HeaderLogo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };
    return (
        <>
            <HeaderLogoIcon onClick={handleClick} />
        </>
    );
};

export default HeaderLogo;

const HeaderLogoIcon = styled.div`
    width: 15rem;
    height: auto;
    margin: -1rem;
    margin-left: 1rem;
    background: url(${HeaderLogoImg}) no-repeat center center;
    object-fit: contain;
    object-position: center;
    background-size: auto 50%;
    cursor: pointer;
`;
/* background: url(${HeaderLogoImg}) no-repeat center center; */
