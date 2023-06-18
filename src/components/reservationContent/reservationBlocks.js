import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PageWrapper = styled.div`
width: 80%;
height: auto;
background: #F8F6F4;
border-top: 1px solid #000000;
border-bottom: 1px solid #000000;
display: flex;
position: relative;
margin: 0 auto;
margin-top: 20px;
flex-direction: column;
align-items: center;
font-size: 16px;
`;

const DateBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  text-align: center;
  font-family: 'GmarketMedium', sans-serif;
`;

const TimeBlock = styled.div`
  background: #FFFFFF;
  padding: 5px;
  margin: 10px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  font-family: 'GmarketLight', sans-serif;
  font-size: 15px;

  &:hover {
    background-color: #ddd;
  }
`;

const CalendarWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 15px;

  .start-date-label {
    margin-right: 10px;
    font-weight: bold;
  }

  .react-datepicker {
    border: none;
    box-shadow: none;
  }

  .react-datepicker-wrapper {
    display: inline-block;
    width: auto;
  }

  .react-datepicker__input-container {
    display: inline-block;
    position: relative;
  }

  .react-datepicker__input-container input {
    font-family: 'GmarketMedium', sans-serif;
    text-align: center;
    width: 90px;
    padding: 5px;
    cursor: pointer;
    font-size: 15px;
  }
`;

function ReservationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { name, address, price, info, image } = location.state || {};

  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBlockClick = (date, time) => {
    const formattedDate = date.toISOString().split('T')[0];
    const formattedTime = `Time ${time}`;

    navigate(`/checkReservation?date=${formattedDate}&time=${encodeURIComponent(formattedTime)}`, {
      state: { name, address, price, info, image },
    });
  };

  return (
    <PageWrapper>
      <CalendarWrapper>
        <span className="start-date-label">Start Date</span>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </CalendarWrapper>
      {dates.map((date, index) => (
        <DateBlock
          key={index}
          active={date.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]}
          onClick={() => setSelectedDate(date)}
        >
          <div>{date.toLocaleDateString()}</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {[...Array(8)].map((_, i) => (
            <TimeBlock
              key={i}
              onClick={() => handleBlockClick(date, i + 1)}
            >
              Time {i + 1}
            </TimeBlock>
          ))}
        </DateBlock>
      ))}
    </PageWrapper>
  );
}

export default ReservationPage;