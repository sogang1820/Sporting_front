import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/mainPage";
import Login from "./pages/loginPage";
import Board from "./pages/boardPage";
import Signup from "./pages/signupPage";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, logoutSuccess } from "./redux/actions/authActions";
import axios from "axios";

const App = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get("/check-login"); // 로그인 상태 확인하는 API 호출
                const user = response.data.user;
                if (user) {
                    dispatch(loginSuccess(user));
                } else {
                    dispatch(logoutSuccess());
                }
            } catch (error) {
                console.error(error);
            }
        };
        checkLoginStatus();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogin = (user) => {
        dispatch(loginSuccess(user));
    };

    const handleLogout = () => {
        dispatch(logoutSuccess());
    };

    return (
        <Router>
            <div>
                {/* 네비게이션 메뉴 등의 공통 요소를 추가할 수 있습니다 */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main
                                isLoggedIn={isLoggedIn}
                                onLogout={handleLogout}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={<Login onLogin={handleLogin} />}
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/board" element={<Board />} />
                    {/* 추가적인 페이지 라우트를 설정 */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
