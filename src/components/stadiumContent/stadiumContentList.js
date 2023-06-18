import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StadiumImage from '../../assets/img/logo.png';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Paginate from 'react-paginate';
import axios from 'axios';

const Stadium = ({ stadium_name, stadium_location, stadium_img, stadium_price, stadium_info, _id, operating_hours }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateSelect = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  const handleStadiumClick = () => {
    navigate(`/reservations?id=${_id}`, { state: { id: _id } });
  };

  const blocks = new Array(8).fill(null);

  return (
    <div>
      <BorderBlock>
        <Image src={stadium_img} alt="stadium image" />
        <Content>
          <Title onClick={handleStadiumClick}>{stadium_name}</Title>
          <p>{stadium_location}</p>
          <p>가격: {stadium_price}원</p>
        </Content>
      </BorderBlock>
    </div>
  );
};

const StadiumContentList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const sportsCategory = queryParams.get('sports_category');
  const stadiumLocation = queryParams.get('stadium_location');
  const reservation = queryParams.get('reservation');
  const stadiumName = queryParams.get('stadium_name');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/stadiums', {
        params: {
          sports_category: sportsCategory,
          stadium_location: stadiumLocation.slice(0, 2),
        },
      });
  
      const today = new Date();
      const todayFormatted = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  
      const formattedData = response.data
        .filter(stadium => new Date(stadium.date).toISOString().split('T')[0] === todayFormatted)
        .map((stadium) => ({
          _id: stadium._id,
          stadium_name: stadium.stadium_name,
          stadium_location: stadium.stadium_location,
          sports_category: stadium.sports_category,
          stadium_img: stadium.stadium_img,
          stadium_price: stadium.stadium_price,
          stadium_info: stadium.stadium_info,
          operating_hours: stadium.operating_hours,
          date: new Date(stadium.date).toISOString().split('T')[0], // 날짜 형식을 "yyyy-mm-dd"로 변환
        }));
  
      setFilteredData(formattedData);
    } catch (error) {
      console.error('Error fetching stadium data:', error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [sportsCategory, stadiumLocation, reservation, stadiumName]);

  console.log('filteredData:', filteredData);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const per_page = 7;
  const offset = currentPage * per_page;

  const currentPageData = filteredData
    .slice(offset, offset + per_page)
    .map((stadium, index) => (
      <Stadium
        key={index}
        stadium_name={stadium.stadium_name}
        stadium_location={stadium.stadium_location}
        sports_category={stadium.sports_category}
        stadium_img={stadium.stadium_img}
        stadium_price={stadium.stadium_price}
        stadium_info={stadium.stadium_info}
        operating_hours={stadium.operating_hours}
        _id={stadium._id}
      />
    ));

  const pageCount = Math.ceil(filteredData.length / per_page);

  return (
    <div>
      {currentPageData.length > 0 ? (
        currentPageData
      ) : (
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No stadiums available.</p>
      )}
      <Pagination
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </div>
  );
};

const BorderBlock = styled.div`
  width: 65%;
  height: 150px;
  position: relative;
  background: #f8f6f4;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  margin: 0 auto;
  padding-left: 30px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 120px;
  float: left;
  margin-right: 20px;
  object-fit: cover;
`;

const Content = styled.div`
  flex-direction: column;
`;

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 5px;
`;

const CustomDatePicker = styled(DatePicker)`
  width: 90px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  font-family: 'GmarketLight', sans-serif;
`;

const TimeBlockContainer = styled.div`
  display: flex;
`;

const TimeBlock = styled.div`
  background: #ffffff;
  padding: 5px;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
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

const Title = styled.h2`
  cursor: pointer;
`;

const Pagination = styled(Paginate)`
  display: flex;
  justify-content: center;
  padding: 20px;
  cursor: pointer;

  ul {
    padding: 0;
    margin 0;
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 5px;
    list-style: none;
  }
`;

export default StadiumContentList;
