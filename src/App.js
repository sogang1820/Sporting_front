import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/mainPage";
import Login from "./pages/loginPage";
import Board from "./pages/boardPage";
import Signup from "./pages/signupPage";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 초기 상태는 로그인되지 않은 상태

    const handleLogin = () => {
        setIsLoggedIn(true); // 로그인 성공 시 isLoggedIn 상태를 true로 변경
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // 로그아웃 시 isLoggedIn 상태를 false로 변경
    };

    return (
        <Router>
            <div>
                {/* 네비게이션 메뉴 등의 공통 요소를 추가할 수 있습니다 */}
                <Routes>
                    <Route
                        path="/"
                        element={<Main isLoggedIn={isLoggedIn} />}
                    />
                    <Route
                        path="/login"
                        element={<Login onLogin={handleLogin} />}
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<Board />} />
                    {/* 추가적인 페이지 라우트를 설정 */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
