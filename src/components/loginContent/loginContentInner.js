import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginSuccess } from "../../redux/actions/authActions";

const LoginContentInner = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickSignup = () => {
        navigate("/signup");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Submitting login form");
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: username, password: password }),
            });

            if (response.ok) {
                const data = await response.json();

                dispatch(
                    loginSuccess({
                        accessToken: data.access_token,
                        username: username, // 사용자 이름은 로그인 폼에서 입력한 username 값을 사용
                    })
                );

                navigate("/");
            } else {
                console.error("로그인 실패");
            }
        } catch (error) {
            console.error("로그인 요청 에러:", error);
        }
    };

    return (
        <Container>
            <LoginForm onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">로그인</Button>
                <ToSignUp onClick={handleClickSignup}>회원가입</ToSignUp>
            </LoginForm>
        </Container>
    );
};

export default LoginContentInner;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
`;

const LoginForm = styled.form`
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    /* background-color: #f1f1f1; */
    border-radius: 8px;
`;

const Input = styled.input`
    width: 95%;
    height: 2rem;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #a0a0a0;
    &::placeholder {
        color: #ffffff; /* 원하는 색상으로 변경 */
    }
    outline: none;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    height: 3rem;
    background-color: #000055;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
`;

const ToSignUp = styled.div`
    cursor: pointer;
    margin-top: 0.5rem;
    text-decoration: underline;
    font-size: 0.8rem;
`;
