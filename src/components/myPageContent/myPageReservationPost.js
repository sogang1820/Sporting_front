import React from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch, useState } from "react-redux";

const MyPageReservationPost = ({ reservation, index }) => {
    const stadium_id = reservation ? reservation.stadium_id : null;
    const reservation_time = reservation ? reservation.time : null;
    console.log("in my respost reservation: ", reservation, index);
    console.log("stadium_id: ", stadium_id);
    const stadium = reservation ? reservation.stadium : null;
    const stadium_img = stadium ? stadium.stadium_img : null;
    console.log("stadium_img: ", stadium_img);
    const stadium_name = stadium ? stadium.stadium_name : null;
    console.log("stadium_name: ", stadium_name);
    const stadium_location = stadium ? stadium.stadium_location : null;
    console.log("stadium_location: ", stadium_location);

    return (
        <>
            <Wrapper>
                <Box>
                    <RsvNum>{index + 1}</RsvNum>
                    <ImgWrap>
                        <RsvImg src={stadium_img} />
                    </ImgWrap>
                    <Stadium>
                        <Title>{stadium_name}</Title>
                        <Location>{stadium_location}</Location>
                        <ReservationInfo>예약시간 | {reservation_time[0]}-{reservation_time[1]}</ReservationInfo>
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
    overflow: hidden;
    font-size: 1.5rem;
`;
const RsvNum = styled.div``;
const Title = styled.h2`
    cursor: pointer;
    font-size: 1.5rem;
`;
const ImgWrap = styled.div`
    margin-left: 1.5rem;
    width: 10.5rem;
    height: 7rem;
    position: relative;
    overflow: hidden;
    border: 0.125rem solid #555555;
`;
const RsvImg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 100%;
    max-width: none;
`;
const Stadium = styled.div`
    margin-left: 1.5rem;
    flex-direction: column;
`;
// const StadiumName = styled.div``;
const Location = styled.div``;

const ReservationInfo = styled.div``;
