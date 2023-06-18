import React from "react";
import StadiumContentSearch from "./stadiumContentSearch";
import StadiumContentList from "./stadiumContentList";
import styled from 'styled-components';

const StadiumContentWrapper = () => {
    return (
        <div>
            <Wrapper>
                <StadiumContentSearch />
                <br />
                <StadiumContentList />
            </Wrapper>
        </div>
    );
};

export default StadiumContentWrapper;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
