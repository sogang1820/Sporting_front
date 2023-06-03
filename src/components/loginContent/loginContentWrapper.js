import React from "react";
import styled from "styled-components";
import LoginContentInner from "./loginContentInner";

const LoginContentWrapper = ({ onLogin }) => {
    return (
        <>
            <Wrapper>
                <LoginContentInner onLogin={onLogin} />
            </Wrapper>
        </>
    );
};
export default LoginContentWrapper;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* display: grid;
    place-items: center;  */
    /* height: 50vh; 페이지의 높이에 맞게 조정 */
`;
