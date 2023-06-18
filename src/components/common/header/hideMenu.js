import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../../redux/actions/authActions";
import styled from "styled-components";
import HideMenuImg from "../../../assets/img/hamburger_menu.png";
import { useNavigate } from "react-router-dom";

const HideMenu = ({ isLoggedIn, onLogout }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isMenuVisible, setMenuVisible] = useState(false);
    useEffect(() => {
        console.log("hideMenu", isLoggedIn);
        // isLoggedIn 상태가 변경되었을 때 메뉴 가시성을 초기화합니다.
        setMenuVisible(false);
    }, [isLoggedIn]);
    const handleLogout = () => {
        dispatch(logoutSuccess());
        setMenuVisible(!isMenuVisible);
        navigate("/");
        toggleMenu();
    };
    const handleMenuMyPageClick = () => {
        navigate("/mypage");
        toggleMenu();
    };
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };
    const navigateToBaseBallPage = () => {
        navigate("/stadiums?sports_category=baseball");
        toggleMenu();
    };
    const navigateToBasketBallPage = () => {
        navigate("/stadiums?sports_category=basketball");
        toggleMenu();
    };

    const navigateToFutsalPage = () => {
        navigate("/stadiums?sports_category=futsal");
        toggleMenu();
    };

    const navigateToTennisPage = () => {
        navigate("/stadiums?sports_category=tennis");
        toggleMenu();
    };

    return (
        <>
            <HideMenuWrap>
                <HideMenuIcon onClick={toggleMenu} />
            </HideMenuWrap>
            {isMenuVisible && (
                <MenuContent>
                    <MenuText>Menu</MenuText>
                    <Line />
                    <BaseBall onClick={navigateToBaseBallPage}>야구</BaseBall>
                    <BasketBall onClick={navigateToBasketBallPage}>
                        농구
                    </BasketBall>
                    <Futsal onClick={navigateToFutsalPage}>풋살</Futsal>
                    <Tennis onClick={navigateToTennisPage}>테니스</Tennis>
                    <MenuBottom>
                        {isLoggedIn ? (
                            <>
                                <MenuMyPage onClick={handleMenuMyPageClick}>
                                    My Page
                                </MenuMyPage>
                                <MenuLogOut onClick={handleLogout}>
                                    로그아웃
                                </MenuLogOut>
                            </>
                        ) : (
                            <></>
                        )}
                    </MenuBottom>
                </MenuContent>
            )}
        </>
    );
};

export default HideMenu;

const HideMenuWrap = styled.div`
    height: 100%;
`;
const HideMenuIcon = styled.div`
    width: 2rem;
    height: 100%;
    background: url(${HideMenuImg}) no-repeat center center;
    background-size: contain;
    cursor: pointer;
    margin-left: 1rem;
    transition: 0.1s;

    &:hover {
        opacity: 0.6;
    }
`;

const MenuContent = styled.div`
    z-index: 1;
    position: absolute;
    width: 30%;
    left: 0;
    bottom: 0;
    height: 92%;
    background-color: #ffffff;
    transition: 0.3s;
    border: 0.125rem solid #393939;
    border-left: none;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
`;
const MenuText = styled.div`
    margin-top: 0.5rem;
    font-size: 1.7rem;
    font-weight: 640;
    color: #505050;
`;

const Line = styled.div`
    margin: 1rem 0;
    border-top: 1px solid #b0b0b0;
`;

const BaseBall = styled.div`
    margin: 1rem;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    color: #505050;
`;
const BasketBall = styled.div`
    margin: 1rem;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    color: #505050;
`;
const Futsal = styled.div`
    margin: 1rem;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #505050;
    cursor: pointer;
`;

const Tennis = styled.div`
    margin: 1rem;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    color: #505050;
`;

const MenuBottom = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
`;
const MenuMyPage = styled.div`
    font-size: 1.1rem;
    font-weight: 620;
    margin: 1rem;
    cursor: pointer;
    left: 1rem;
`;
const MenuLogOut = styled.div`
    font-size: 1.1rem;
    font-weight: 620;
    cursor: pointer;
    margin: 1rem;
`;
