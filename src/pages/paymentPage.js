import React from 'react';
import Header from '../components/common/header/header';
import Payment from '../components/paymentContent/paymentContent';
import styled from 'styled-components';

const PaymentPage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
            <Payment />
        </div>
    );
};

export default PaymentPage;
