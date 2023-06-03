import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const HeaderUser = () => {
    const user = useSelector((state) => state.auth.user);
    const username = user ? user.username : "";
    console.log({ user: username });

    return (
        <>
            <ToMyPage>
                <div>My Page {username}</div>
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
`;
