import React, { useState } from "react";
import styled from "styled-components";
import HideMenuImg from "../../../assets/img/hamburger_menu.png";

const HideMenu = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };
    return (
        <>
            <HideMenuWrap>
                <HideMenuIcon onClick={toggleMenu} />
            </HideMenuWrap>
            {isMenuVisible && (
                <MenuContent>
                    <div>Menu</div>
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
    /* Define the styles for the menu content */
`;
