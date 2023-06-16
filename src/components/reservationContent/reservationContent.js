import React, { useState } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  width: 100%;
`;

const DateBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;

const TimeBlock = styled.div`
  padding: 5px;
  margin: 10px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: 12px;

  &:hover {
    background-color: #ddd;
  }
`;

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const Calendar = styled.input`
  padding: 7px;
`;

const getDatesForWeek = (selectedDate) => {
  const dates = [];
  const startDate = new Date(selectedDate);
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    dates.push(date);
  }
  return dates;
};

function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const dates = getDatesForWeek(selectedDate);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <PageWrapper>
      <CalendarWrapper>
        <Calendar
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </CalendarWrapper>
      {dates.map((date, index) => (
        <DateBlock key={index} active={date.toISOString().split('T')[0] === selectedDate} onClick={() => setSelectedDate(date.toISOString().split('T')[0])}>
          <div>{date.toLocaleDateString()}</div>
          {[...Array(8)].map((_, i) => <TimeBlock key={i}>Time {i + 1}</TimeBlock>)}
        </DateBlock>
      ))}
    </PageWrapper>
  );
}

export default ReservationPage;
