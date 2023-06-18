import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MyPageReservationPost from "./myPageReservationPost";

const MyPageReservation = ({ onLogin }) => {
    const user = useSelector((state) => state.auth.user);
    const reservations = user.userInfo ? user.userInfo.reservations : null;
    console.log("in mypage reservation: ", user);
    console.log("in mypage reservation: ", reservations);
    const firstReservation = reservations[0];
    console.log("in mypage first reservation: ", firstReservation);
    // console.log("reservations stadium_id", reservations[0].stadium_id);
    return (
        <>
            <Wrapper>
                <ReservationText>예약 현황</ReservationText>
                <div>
                    {reservations &&
                        JSON.parse(reservations).map((reservation, index) => (
                            <ForMargin key={index}>
                                <MyPageReservationPost
                                    key={index}
                                    reservation={reservation} // 예약 정보를 MyPageReservationPost 컴포넌트에 전달
                                    index={index}
                                />
                            </ForMargin>
                        ))}
                </div>
            </Wrapper>
        </>
    );
};
export default MyPageReservation;

const Wrapper = styled.div`
    /* display: grid;
    place-items: center;  */
    /* height: 50vh; 페이지의 높이에 맞게 조정 */
    & > div {
        margin-top: 2rem;
        margin: 2rem 7rem;
        font-weight: 550;
        font-size: 2rem;
    }
`;

const ReservationText = styled.div`
    /* margin-top: 2rem;
    margin: 7rem;
    font-weight: 550;
    font-size: 2rem; */
`;
const ForMargin = styled.div`
    margin-bottom: 8rem;
`;
