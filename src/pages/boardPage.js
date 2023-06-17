import React from "react";
import Header from "../components/common/header/header";
import SearchSection from "../components/boardContent/searchSection";
import BoardSection from "../components/boardContent/boardContent";
import styled from 'styled-components';

const BoardPage = ({ isLoggedIn, onLogout }) => {
  return (
      <div>
          <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
          <SearchSection/>
          <br/>
          <div style={{display:'flex', justifyContent:'center'}}>
          </div>
          <BoardSection/>
      </div>
  );
};

export default BoardPage;
