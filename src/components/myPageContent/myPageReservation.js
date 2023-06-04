import React from "react";
import styled from "styled-components";
import MyPageReservationPost from "./myPageReservationPost";

const MyPageReservation = ({ onLogin }) => {
    return (
        <>
            <Wrapper>
                <ReservationText>예약 현황</ReservationText>
                {/* {postMessage.map((post) => (
                    <MyPageReservationPost key={post.id} post={post} />
                ))} */}
            </Wrapper>
        </>
    );
};
export default MyPageReservation;

const Wrapper = styled.div`
    /* display: grid;
    place-items: center;  */
    /* height: 50vh; 페이지의 높이에 맞게 조정 */
`;

const ReservationText = styled.div`
    margin-top: 2rem;
    margin-left: 7rem;
    font-weight: 550;
    font-size: 2rem;
`;
