import React from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch, useState } from "react-redux";

const MyPageReservationPost = ({ reservation, index }) => {
    console.log("in my respost reservation: ", reservation, index);
    const stadium_id = reservation ? reservation.stadium_id : null;
    console.log("stadium_id: ", stadium_id)
    return (
        <>
            <Wrapper>
                <Box>
                    <RsvNum>{index + 1}</RsvNum>
                    <RsvImg />
                    <Stadium>
                        <ReservationInfo></ReservationInfo>
                    </Stadium>
                </Box>
            </Wrapper>
            {/* 게시글의 기타 정보를 렌더링하는 코드 추가 */}
        </>
    );
};

export default MyPageReservationPost;

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    height: 10vh;
    /* display: grid;
    place-items: center;  */
    /* height: 50vh; 페이지의 높이에 맞게 조정 */
`;

const Box = styled.div`
    width: 100%;
    height: 150px;
    position: relative;
    background: #f8f6f4;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    margin: 0 auto;
    padding-left: 30px;
    margin-top: 30px;
    display: flex;
    align-items: center;
`;
const RsvNum = styled.div``;
const RsvImg = styled.div``;
const Stadium = styled.div``;
const ReservationInfo = styled.div``;
