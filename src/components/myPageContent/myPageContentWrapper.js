import React from "react";
import styled from "styled-components";
import MyPagePrivateInfo from "./myPagePrivateInfo";
import MyPageReservation from "./myPageReservation";

const MyPageContentWrapper = ({ onLogin }) => {
    return (
        <>
            <Wrapper>
                <MyPagePrivateInfo />
                <MyPageReservation />
            </Wrapper>
        </>
    );
};
export default MyPageContentWrapper;

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 2rem;
    margin-left: 7rem;
    margin-right: 7rem;
    font-weight: 550;
    font-size: 2rem;
    margin-bottom: 10rem;
    /* display: grid;
    place-items: center;  */
    /* height: 50vh; 페이지의 높이에 맞게 조정 */
`;
