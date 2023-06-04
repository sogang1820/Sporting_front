import React from "react";
import Header from "../components/common/header/header";
import MainContentWrapper from "../components/mainContent/mainContentWrapper";

const MainPage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onLogout={onLogout}/>
            <MainContentWrapper isLoggedIn={isLoggedIn} onLogout={onLogout}/>
        </div>
    );
};

export default MainPage;
