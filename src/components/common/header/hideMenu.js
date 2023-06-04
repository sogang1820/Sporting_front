import styled from "styled-components";
import HideMenuImg from "../../../assets/img/hamburger_menu.png";

const HideMenu = () => {
<<<<<<< Updated upstream
=======
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    const handleLogout = () => {
        // 로그아웃 처리 로직을 구현하세요
        // 예시: 로그아웃 시 필요한 작업을 수행하는 함수를 호출하거나 상태를 업데이트합니다.
        console.log("로그아웃되었습니다.");
    };
>>>>>>> Stashed changes
    return (
        <>
            <HideMenuWrap>
                <HideMenuIcon />
            </HideMenuWrap>
<<<<<<< Updated upstream
=======
            {isMenuVisible && (
                <MenuContent>
                    <MenuText>Menu</MenuText>
                    <Line />
                    <BaseBall>야구</BaseBall>
                    <BasketBall>농구</BasketBall>
                    <Futsal>풋살</Futsal>
                    <MenuBottom>
                        <MenuMyPage>My Page</MenuMyPage>
                        <MenuLogOut onClick={handleLogout}>로그아웃</MenuLogOut>
                    </MenuBottom>
                </MenuContent>
            )}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

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
>>>>>>> Stashed changes
