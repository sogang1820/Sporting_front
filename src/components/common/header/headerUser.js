import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const HeaderUser = () => {
    const user = useSelector((state) => state.auth.user);
    const [username, setUsername] = useState("");

    useEffect(() => {
        // 사용자 정보 요청
        const fetchUserProfile = async () => {
            try {
                console.log("hello fetchUserProfile");
                console.log({ user_id: user.user_id });
                const response = await fetch(
                    `http://localhost:8000/users/${user.user_id}/profile`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username); // 사용자 이름 설정
                } else {
                    console.error("사용자 정보 요청 실패");
                }
            } catch (error) {
                console.error("사용자 정보 요청 에러:", error);
            }
        };

        if (user) {
            fetchUserProfile();
        }
    }, [user]);
    return (
        <>
            <ToMyPage>
                <div>My Page {username}</div>
            </ToMyPage>
        </>
    );
};

export default HeaderUser;

const ToMyPage = styled.div`
    font-weight: 700;
    font-size: 2rem;
    color: brown;
    margin: auto;
`;
