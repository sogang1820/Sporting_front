import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';
import queryString from 'query-string';
import axios from 'axios';

const SearchBlock = styled.div`
  width: 90%;
  height: 200px;
  background: #F8F6F4;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  position: relative;
  margin: 0 auto;
  padding-left: 50px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const SelectBox = styled.select`
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-top: 16px;
`;

const Input = styled.input`
  padding: 4px;
  border: none;
  border-bottom: 1px solid #000000;
  background-color: #F8F6F4;
  color: #000000;
  font-size: 14px;
  font-family: 'GmarketLight', sans-serif;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 5px 10px;
  background-color: #FFFFFF;
  color: #000000;
  font-size: 14px;
  border: 1px solid #000000;
  cursor: pointer;
  font-family: 'GmarketLight', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StadiumContentSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [sports_category, setSport] = useState('');
  const [stadium_location, setRegion] = useState('');
  const [reservation, setReservation] = useState('all');
  const [stadium_name, setStadiumName] = useState('');

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    if (parsed.sports_category) {
      setSport(parsed.sports_category);
    }
  }, [location]);

  const handleClickRadioButton1 = (e) => {
    console.log(e.target.value);
    setSport(e.target.value);
    navigate(`/stadiums?sports_category=${e.target.value}`);
  };

  const handleClickRadioButton2 = (e) => {
    console.log(e.target.value);
    setReservation(e.target.value);
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
    setRegion(e.target.value);
  };

  const handleStadiumNameChange = (e) => {
    setStadiumName(e.target.value);
  };

  const handleSearch = async () => {
    const query = {
      sports_category,
      stadium_location: stadium_location === "ALL" ? "" : stadium_location.slice(0, 2),
      stadium_name,
      reservation,
    };

    navigate(`/stadiums?${queryString.stringify(query)}`);
  
    console.log("Query sent to the server: ", query);
  
    try {
      const response = await axios.get('http://localhost:8000/stadiums', {
        params: query
      });
  
      console.log("Response from the server: ", response.data);

    } catch (error) {
      console.error('Error fetching stadium data:', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [sports_category]);

  return (
    <SearchBlock>
      <div>
        <b>종목</b>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          value="baseball"
          checked={sports_category === "baseball"}
          onChange={handleClickRadioButton1}
        />
        <label> 야구 </label>
        &nbsp;&nbsp;
        <input
          type="radio"
          value="basketball"
          checked={sports_category === "basketball"}
          onChange={handleClickRadioButton1}
        />
        <label> 농구 </label>
        &nbsp;&nbsp;
        <input
          type="radio"
          value="futsal"
          checked={sports_category === "futsal"}
          onChange={handleClickRadioButton1}
        />
        <label> 풋살 </label>

        <br /><br />
        <SelectWrapper>
          <b>지역</b>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SelectBox value={stadium_location} onChange={handleSelect}>
            <option value="ALL">전체</option>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="인천">인천</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
            <option value="세종">세종</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="충북">충청</option>
            <option value="경북">경상</option>
            <option value="전북">전라</option>
            <option value="제주">제주</option>
          </SelectBox>
        </SelectWrapper>
        <br />

        <b>예약</b>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          value="all"
          checked={reservation === "all"}
          onChange={handleClickRadioButton2}
        />
        <label> 전체 </label>
        &nbsp;&nbsp;
        <input
          type="radio"
          value="spor+ing"
          checked={reservation === "spor+ing"}
          onChange={handleClickRadioButton2}
        />
        <label> Spor+ing </label>
        &nbsp;&nbsp;
        <input
          type="radio"
          value="other"
          checked={reservation === "other"}
          onChange={handleClickRadioButton2}
        />
        <label> 외부사이트 </label>

        <br />

        <InputWrapper>
          <b>검색</b>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Input
            type="text"
            value={stadium_name}
            onChange={handleStadiumNameChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <SearchButton onClick={handleSearch}>검색</SearchButton>
        </InputWrapper>
      </div>
    </SearchBlock>
  );
};

export default StadiumContentSearch;
