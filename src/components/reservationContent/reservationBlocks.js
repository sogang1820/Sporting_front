import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import CheckReservationModal from "./checkReservationModal";

const PageWrapper = styled.div`
    width: 80%;
    height: auto;
    background: #f8f6f4;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    display: flex;
    position: relative;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 50px;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
`;

const TimeBlock = styled.div`
    background: #ffffff;
    padding: 5px;
    margin: 10px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    font-family: "GmarketLight", sans-serif;
    font-size: 15px;
    width: 80%;
    height: 25px;

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
        font-family: "GmarketMedium", sans-serif;
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
  const { id, name, address, price, info, image } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [operatingHours, setOperatingHours] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        const fetchOperatingHours = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/stadiums/${id}`
                );
                const { operating_hours } = response.data;
                setOperatingHours(operating_hours);
            } catch (error) {
                console.error("Error fetching operating hours:", error);
            }
        };

    fetchOperatingHours();
  }, [id]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBlockClick = (time) => {
    const today = new Date();
    const localDate = new Date(today.getTime() - (today.getTimezoneOffset() * 60000));
    const formattedDate = localDate.toISOString().split("T")[0];
    const formattedTime = `${time[0].start} - ${time[1].end}`;

    const formattedSelectedDate = new Date(
      selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    
    navigate(
      `/checkReservation?id=${id}&date=${encodeURIComponent(
        formattedSelectedDate
      )}&time=${encodeURIComponent(formattedTime)}`,
      {
        state: {
          name,
          address,
          price,
          info,
          image,
          selectedDate: formattedDate,
          selectedTime: formattedTime,
        },
      }
    );
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
      {operatingHours.map((time, index) => (
        <TimeBlock
          key={index}
          onClick={() => {
            handleBlockClick(time);
            handleOpenModal();
          }}
        >
          {time[0].start} - {time[1].end}
        </TimeBlock>
      ))}
      {isModalOpen && (
        <CheckReservationModal onClose={handleCloseModal} />
      )}
    </PageWrapper>
  );
}

export default ReservationPage;
