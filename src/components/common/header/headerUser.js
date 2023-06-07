import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderUser = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/mypage");
    };
    const user = useSelector((state) => state.auth.user);
    const [user_id, setUserId] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [isManager, setIsManager] = useState(false);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                if (user && user.accessToken) {
                    console.log(
                        "hello fetchUserProfile",
                        user.accessToken,
                        user.username,
                        user.user_id
                    );
                    const response = await fetch(
                        `http://localhost:8000/users/${user.username}/profile`,
                        {
                            headers: {
                                Authorization: `Bearer ${user.accessToken}`,
                            },
                        }
                    );
                    console.log("user", user);
                    console.log("user_id, username", user_id, username);
                    if (response.ok) {
                        const data = await response.json();
                        setUserId(data.user_id);
                        setPhone(data.phone_number);
                        setIsManager(data.is_manager);
                        setPoints(data.points);
                        console.log("data", data);
                    } else {
                        console.error("사용자 정보 요청 실패");
                    }
                }
            } catch (error) {
                console.error("사용자 정보 요청 에러:", error);
            }
        };

        fetchUserProfile();
    }, [user]);
    return (
        <>
            <ToMyPage>
                <div onClick={handleClick}>{user.username}</div>
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
