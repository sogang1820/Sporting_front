import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    text-align: center;
    width: 90px;
    padding: 5px;
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
                    {[...Array(8)].map((_, i) => (
                        <TimeBlock
                            key={i}
                            onClick={() => navigate(`/checkReservation?date=${date.toISOString().split('T')[0]}&time=Time%20${i + 1}`, { state: { name, address, price, info, image }})}
                            >
                            Time {i + 1}
                        </TimeBlock>))}
                </DateBlock>
            ))}
        </PageWrapper>
    );
}

export default ReservationPage;
