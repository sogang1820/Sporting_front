import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SignUpInnerWrapper = () => {
    const [user, setUser] = useState({
        user_id: "",
        password: "",
        username: "",
        phone_number: "",
        is_manager: false,
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/signup", user)
            .then((response) => {
                const responseData = response.data;
                console.log("회원가입 성공");
                console.log(responseData);
                const userId = responseData.user_id;
                console.log("사용자 ID:", userId);
            })
            .catch((error) => {
                console.log("회원가입 실패:", error.response.data);
                setErrorMessage("회원가입 실패: " + error.response.data);
            });
    };

    return (
        <SignUpWrapper>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <SignUpForm onSubmit={handleSubmit}>
                <SignupLabel>
                    <div>아이디</div>
                    <SignUpInput
                        type="text"
                        name="user_id"
                        value={user.user_id}
                        onChange={handleChange}
                    />
                </SignupLabel>
                <br />
                <SignupLabel>
                    <div>비밀번호</div>
                    <SignUpInput
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </SignupLabel>
                <br />
                <SignupLabel>
                    <div>이름</div>
                    <SignUpInput
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                    />
                </SignupLabel>
                <br />
                <SignupLabel>
                    <div>전화번호</div>
                    <SignUpInput
                        type="text"
                        name="phone_number"
                        value={user.phone_number}
                        onChange={handleChange}
                    />
                </SignupLabel>
                <br />
                <SignupLabel>
                    <SignupManager>
                        <div>관리자</div>
                        <SignUpWrap
                            type="checkbox"
                            name="is_manager"
                            checked={user.is_manager}
                            onChange={(e) =>
                                setUser((prevUser) => ({
                                    ...prevUser,
                                    is_manager: e.target.checked,
                                }))
                            }
                        />
                        <div>사용자</div>
                        <SignUpWrap type="checkbox" name="is_manager_no" />
                    </SignupManager>
                </SignupLabel>
                <br />
                <SignUpButton type="submit">회원가입</SignUpButton>
            </SignUpForm>
        </SignUpWrapper>
    );
};
export default SignUpInnerWrapper;

const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SignUpForm = styled.form`
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    /* background-color: #f1f1f1; */
    border-radius: 8px;
`;

const SignupManager = styled.div`
    width: 21rem;
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
`;

const SignupLabel = styled.label`
    color: #000055;
    font-weight: 600;
`;

const SignUpWrap = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #000055;
    border-radius: 4px;
    background-color: #ffffff;
    &:checked {
        background-color: #000055;
    }
`;

const SignUpInput = styled.input`
    width: 20rem;
    height: 2rem;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #a0a0a0;
    &::placeholder {
        color: #ffffff; /* 원하는 색상으로 변경 */
    }
    color: #ffffff; /* 원하는 색상으로 변경 */
    font-size: 1.2rem;
    outline: none;
`;

const ErrorMessage = styled.p`
    color: red;
`;

const SignUpButton = styled.button`
    width: 21.6rem;
    padding: 10px 20px;
    background-color: #000055;
    color: #fff;
    border: none;
    cursor: pointer;
    height: 3rem;
    border-radius: 4px;
`;
