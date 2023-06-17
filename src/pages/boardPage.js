import React from "react";
import Header from "../components/common/header/header";
import SearchSection from "../components/boardContent/searchSection";
import BoardSection from "../components/boardContent/boardContent";
import styled from 'styled-components';

const SearchButton = styled.button`
  padding: 5px 15px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  font-size: 14px;
  cursor: pointer;
`;

const BoardPage = () => {
  return (
      <div>
          <Header />
          <SearchSection/>
          <br/>
          <div style={{display:'flex', justifyContent:'center'}}>
          <SearchButton> 검색 </SearchButton>
          </div>
          <BoardSection/>
      </div>
  );
};

export default BoardPage;
