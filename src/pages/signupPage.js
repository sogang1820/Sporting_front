import React from "react";
import { styled } from "styled-components";
import LoginLogoWrapper from "../components/loginContent/loginLogoWrapper";
import SignupContentWrapper from "../components/signupContent/signUpContentWrapper";

function SignupPage() {
    return (
        <>
            <SignupWrapper>
                <div>
                    <LoginLogoWrapper />
                    <SignupContentWrapper />
                </div>
            </SignupWrapper>
        </>
    );
}

export default SignupPage;

const SignupWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 요소의 높이를 조정할 수 있습니다. */
`;
