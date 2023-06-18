<<<<<<< HEAD
import React from "react";
import Header from "../components/common/header/header";
import Payment from "../components/paymentContent/paymentContent";
import styled from "styled-components";
=======
import React from 'react';
import Header from '../components/common/header/header';
import Payment from '../components/paymentContent/paymentContent';
import styled from 'styled-components';
>>>>>>> 00c806e8066ed394e1515f287048a80be303c1a6

const PaymentPage = ({ isLoggedIn, onLogout }) => {
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
            <Payment />
        </div>
    );
};

export default PaymentPage;
