import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
// import { loginSuccess, fetchUserInfo } from "../../../redux/actions/authActions";
const HeaderUser = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const username = user.userInfo ? user.userInfo.username : null;
    console.log("in headerUser: ", user);
    const handleClick = () => {
        navigate("/mypage");
    };

    return (
        <>
            <ToMyPage>
                <div onClick={handleClick}>{username}</div>
            </ToMyPage>
        </>
    );
};

export default HeaderUser;

const ToMyPage = styled.div`
    font-weight: 700;
    font-size: 2rem;
    color: brown;
    margin: auto;
    cursor: pointer;
`;
