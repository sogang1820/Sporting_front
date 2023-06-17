import React from 'react';
import Header from "../components/common/header/header";
import styled from 'styled-components';

const PaymentPage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
        </div>
    );
};

export default PaymentPage;
