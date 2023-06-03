import React from "react";
import Baseball from "../../assets/img/baseball.jpg";
import Basketball from "../../assets/img/basketball.jpg";
import Futsal from "../../assets/img/futsal.jpg";
import styled from "styled-components";

const circlesData = [
    { image: Baseball, label: "야구" },
    { image: Basketball, label: "농구" },
    { image: Futsal, label: "풋살" },
];

const MainContentWrapper = () => {
    return (
        <Wrapper>
            {circlesData.map((circle, index) => (
                <Circle key={index}>
                    <CircleImage className={circle.label.toLowerCase()}>
                        <img src={circle.image} alt={circle.label} />
                    </CircleImage>
                    <Overlay>
                        <Label>{circle.label}</Label>
                    </Overlay>
                </Circle>
            ))}
        </Wrapper>
    );
};

export default MainContentWrapper;

const Wrapper = styled.div`
    /* 추가적인 스타일 */
    display: flex;
    justify-content: space-around;
    /* margin-top: 100px; 동그라미 사이의 간격 조정 */
    margin: 150px auto;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5); /* 반투명한 회색 배경 */
    opacity: 0;
    transition: opacity 0.3s;
`;

const Circle = styled.div`
    position: relative;
    width: 350px; /* 동그라미의 너비 */
    height: 350px; /* 동그라미의 높이 */
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover ${Overlay} {
        opacity: 1;
    }
`;

const CircleImage = styled.div`
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const Label = styled.span`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;
