import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBlock = styled.div`
width: 100%;
height: 200px;

background:#F8F6F4;
border-top: 1px solid #000000;
border-bottom: 1px solid #000000;

position: relative;

margin: 0 auto;
padding-left: 50px;

margin-top: 32px;
display: flex;
align-items: center;
font-size: 16px
`

function SearchPage() {
  const [sport, setSport] = useState('soccer');
  const [region, setRegion] = useState('');
  const [reservation, setReservation] = useState('all');

  const handleClickRadioButton1 = (e) => {
    console.log(e.target.value)
    setSport(e.target.value)
  }

  const handleClickRadioButton2 = (e) => {
    console.log(e.target.value)
    setReservation(e.target.value)
  }

  const handleSelect = (e) => {
    console.log(e.target.value)
    setRegion(e.target.value)
  }

  return <SearchBlock>
    <div>
        종목
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
        type="radio"
        value="soccer"
        checked={sport ==="soccer"}
        defaultChecked="checked"
        onChange={handleClickRadioButton1}
        />
        <label> 축구 </label>
        &nbsp;&nbsp;
        <input
        type="radio"
        value="basketball"
        checked={sport ==="basketball"}
        onChange={handleClickRadioButton1}
        />
        <label> 농구 </label>
        &nbsp;&nbsp;
        <input
        type="radio"
        value="futsal"
        checked={sport ==="futsal"}
        onChange={handleClickRadioButton1}
        />
        <label> 풋살 </label>

        <br/><br/>
      <label>
        지역
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select value={region} onChange={handleSelect}>
          <option value="">선택하세요</option>
          <option value="서울">서울</option>
          <option value="부산">부산</option>
          <option value="인천">인천</option>
          <option value="대구">대구</option>
          <option value="광주">광주</option>
          <option value="대전">대전</option>
          <option value="울산">울산</option>
          <option value="경기">경기</option>
          <option value="강원">강원</option>
          <option value="충북">충북</option>
          <option value="충남">충남</option>
          <option value="전북">전북</option>
          <option value="전남">전남</option>
          <option value="경북">경북</option>
          <option value="경남">경남</option>
          <option value="제주">제주</option>
          <option value="세종">세종</option>

        </select>
      </label>
      <br/><br/>

      예약
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
        type="radio"
        value="all"
        checked={reservation ==="all"}
        defaultChecked="checked"
        onChange={handleClickRadioButton2}
        />
        <label> 전체 </label>
        &nbsp;&nbsp;
        <input
        type="radio"
        value="spor+ing"
        checked={reservation ==="spor+ing"}
        onChange={handleClickRadioButton2}
        />
        <label> Spor+ing </label>
        &nbsp;&nbsp;
        <input
        type="radio"
        value="other"
        checked={reservation ==="other"}
        onChange={handleClickRadioButton2}
        />
        <label> 외부사이트 </label>

        <br/><br/>
      </div>
    </SearchBlock>
}

export default SearchPage;
