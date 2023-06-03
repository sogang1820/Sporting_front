import React from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import LoginContentWrapper from "../components/loginContent/loginContentWrapper";
import LoginLogoWrapper from "../components/loginContent/loginLogoWrapper";
import { styled } from "styled-components";

const LoginPage = ({ onLogin }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        // 로그인 처리 로직...
        const user = {
            // 로그인한 사용자 정보
        };
        dispatch(loginSuccess(user)); // 로그인 성공 시 상태 업데이트
        navigate("/");
    };

    return (
        <>
            <LoginWrapper>
                <div>
                    <LoginLogoWrapper />
                    <LoginContentWrapper onLogin={handleLogin} />
                </div>
            </LoginWrapper>
        </>
    );
};

export default LoginPage;

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 요소의 높이를 조정할 수 있습니다. */
`;
