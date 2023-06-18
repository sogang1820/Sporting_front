import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../paymentContent/paymentModal";

const MyPagePrivateInfo = ({ onLogin }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [points, setPoints] = useState(null); // 초기값은 null로 설정
    const user = useSelector((state) => state.auth.user);
    const username = user.userInfo ? user.userInfo.username : null;
    const phone_number = user.userInfo ? user.userInfo.phone_number : null;
    console.log("in my page: ", user);

    const navigateToMyPage = () => {
        navigate("/mypage");
    };
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        // user 객체의 변경을 감지하여 points 값을 업데이트
        if (user.userInfo) {
            setPoints(user.userInfo.points);
            console.log("hello, points are changed");
        }
    }, [user]);

    return (
        <PrivateInfoWrapper>
            <MyPageText>마이 페이지</MyPageText>
            <InfoWrapper>
                <FieldWrapper>
                    <PrivateInfoField>이름</PrivateInfoField>
                    <PrivateInfoData>{username}</PrivateInfoData>
                </FieldWrapper>
                <FieldWrapper>
                    <PrivateInfoField>연락처</PrivateInfoField>
                    <PrivateInfoData>{phone_number}</PrivateInfoData>
                </FieldWrapper>
                <FieldWrapper>
                    <PrivateInfoField>선호종목</PrivateInfoField>
                    <PrivateInfoData>야구</PrivateInfoData>
                </FieldWrapper>
                <FieldWrapper>
                    <PrivateInfoField>보유 포인트</PrivateInfoField>
                    <PrivateInfoData>
                        <div>{points !== null ? `${points}pt` : "-"}</div>
                        <FixInfoWrapper>
                            <PointLoad onClick={handleOpenModal}>
                                포인트 충전
                            </PointLoad>
                            {isModalOpen && (
                                <PaymentModal onClose={handleCloseModal} />
                            )}
                            <PointWithDraw>포인트 인출</PointWithDraw>
                        </FixInfoWrapper>
                    </PrivateInfoData>
                </FieldWrapper>
                <FixInfoWrapper>
                    <FixPrivateInfo onClick={navigateToMyPage}>
                        개인정보 변경
                    </FixPrivateInfo>
                    <DeleteAccount>계정 삭제</DeleteAccount>
                </FixInfoWrapper>
            </InfoWrapper>
        </PrivateInfoWrapper>
    );
};
export default MyPagePrivateInfo;

const PrivateInfoWrapper = styled.div``;

const MyPageText = styled.div`
    font-family: GmarketMedium, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 3rem;
`;
const InfoWrapper = styled.div`
    margin-top: 2rem;
    margin-left: 7rem;
`;
const FieldWrapper = styled.div`
    display: flex;
    margin: 1rem;
`;

const PrivateInfoField = styled.div`
    width: 15rem;
    display: flex;
    font-weight: 600;
    font-size: 1.5rem;
    margin-right: 2rem;
`;

const PrivateInfoData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1.5rem;
`;
const FixInfoWrapper = styled.div`
    text-align: right;
    margin-right: 3rem;
`;

const PointLoad = styled.button`
    margin-left: 1rem;
    font-size: 0.8rem;
    margin: 0.5rem;
    background-color: #ffffff;
    border: 0.0625rem solid #808080;
    border-radius: 0.3rem;
    cursor: pointer;
`;

const PointWithDraw = styled.button`
    font-size: 0.8rem;
    margin: 0.5rem;
    background-color: #ffffff;
    border: 0.0625rem solid #808080;
    border-radius: 0.3rem;
    cursor: pointer;
`;
const FixPrivateInfo = styled.button`
    font-size: 0.8rem;
    margin: 0.5rem;
    background-color: #ffffff;
    border: 0.0625rem solid #808080;
    border-radius: 0.3rem;
    cursor: pointer;
`;

const DeleteAccount = styled.button`
    font-size: 0.8rem;
    margin: 0.5rem;
    background-color: #ffffff;
    border: 0.0625rem solid #808080;
    border-radius: 0.3rem;
    cursor: pointer;
`;
