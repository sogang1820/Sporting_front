import styled from "styled-components";
import HideMenuImg from "../../../assets/img/hamburger_menu.png";

const HideMenu = () => {
    return (
        <>
            <HideMenuWrap>
                <HideMenuIcon />
            </HideMenuWrap>
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
