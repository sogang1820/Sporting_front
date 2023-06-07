import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyPagePrivateInfo = ({ onLogin }) => {
    const user = useSelector((state) => state.auth.user);
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [isManager, setIsManager] = useState(false);
    const [points, setPoints] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                if (user && user.accessToken) {
                    const response = await fetch(
                        `http://localhost:8000/users/${user.user_id}/profile`,
                        {
                            headers: {
                                Authorization: `Bearer ${user.accessToken}`,
                            },
                        }
                    );

                    if (response.ok) {
                        const data = await response.json();
                        setUsername(data.username);
                        setPhone(data.phone_number);
                        setIsManager(data.is_manager);
                        setPoints(data.points);
                    } else {
                        console.error("사용자 정보 요청 실패");
                    }
                }
            } catch (error) {
                console.error("사용자 정보 요청 에러:", error);
            }
        };

        if (user) {
            fetchUserProfile();
        }
    }, [user]);

    const navigateToMyPage = () => {
        navigate("/mypage");
    };

    return (
        <PrivateInfoWrapper>
            <MyPageText>마이 페이지</MyPageText>
            <InfoWrapper>
                <FieldWrapper>
                    <PrivateInfoField>이름</PrivateInfoField>
                    <PrivateInfoData>{user.username}</PrivateInfoData>
                </FieldWrapper>
                <FieldWrapper>
                    <PrivateInfoField>연락처</PrivateInfoField>
                    <PrivateInfoData>{phone}</PrivateInfoData>
                </FieldWrapper>
                <FieldWrapper>
                    <PrivateInfoField>선호종목</PrivateInfoField>
                    <PrivateInfoData>야구</PrivateInfoData>
                </FieldWrapper>
                <FieldWrapper>
                    <PrivateInfoField>보유 포인트</PrivateInfoField>
                    <PrivateInfoData>
                        <div>{points}pt</div>
                        <FixInfoWrapper>
                            <PointLoad>포인트 충전</PointLoad>
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
