import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import StadiumImage from "../../assets/img/logo.png";
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Paginate from 'react-paginate';

const BorderBlock = styled.div`
width: 65%;
height: 150px;
position: relative;
background: #F8F6F4;
border-top: 1px solid #000000;
border-bottom: 1px solid #000000;
margin: 0 auto;
padding-left: 30px;
margin-top: 30px;
display: flex;
align-items: center;
`

const Image = styled.img`
width: 120px;
float: left;
margin-right: 20px;
object-fit: cover;
`

const Content = styled.div`
flex-direction: column;
`

const DatePickerContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
margin-right: 5px;
`

const CustomDatePicker = styled(DatePicker)`
width: 90px;
height: 20px;
text-align: center;
cursor: pointer;
font-family: 'GmarketLight', sans-serif;
`

const TimeBlockContainer = styled.div`
display: flex;
`

const TimeBlock = styled.div`
background: #FFFFFF;
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
`

const Title = styled.h2`
cursor: pointer;
`

function Stadium({ name, address, image, price, info }) {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const handleStadiumClick = () => {
    navigate(`/reservation?name=${encodeURIComponent(name)}`, {
      state: { name, address, image, price, info },
    });
  };

  const handleDateSelect = (date) => {
    console.log(date);
    setSelectedDate(date);
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    navigate(`/checkreservation?name=${encodeURIComponent(name)}&date=${selectedDate.toISOString().split('T')[0]}&time=Time%20${time}`, {
      state: { name, address, image, price, info },
    });
  }

  const blocks = new Array(8).fill(null);

  return (
    <div>
      <BorderBlock>
        <Image src={StadiumImage} alt="stadium image" />
        <Content>
          <Title onClick={handleStadiumClick}>{name}</Title>
          <p>{address}</p>
          <DatePickerContainer>
            <CustomDatePicker
              selected={selectedDate}
              onChange={handleDateSelect}
              dateFormat="yyyy-MM-dd"
            />
            <TimeBlockContainer>
              {blocks.map((_, index) => (
                <TimeBlock key={index} onClick={() => handleTimeSelect(index + 1)}>
                  Time {index + 1}
                </TimeBlock>
              ))}
            </TimeBlockContainer>
          </DatePickerContainer>
        </Content>
      </BorderBlock>
    </div>
  );
}

const dummyData = [
  {
    stadium_name: "Stadium 1",
    sports_category: "baseball",
    stadium_location: "경기도 부천시",
    stadium_price: "Price 1",
    stadium_info: "Stadium Information 1",
    stadium_image: StadiumImage
  },
  {
    stadium_name: "체육 시설 2",
    sports_category: "basketball",
    stadium_location: "주소 2",
    stadium_price: "가격 2",
    stadium_info: "체육 시설 정보 2",
    stadium_image: StadiumImage
  },
  {
    stadium_name: "Stadium 3",
    sports_category: "futsal",
    stadium_location: "Address 3",
    stadium_price: "Price 3",
    stadium_info: "Stadium Information 3",
    stadium_image: StadiumImage
  },
  {
    stadium_name: "체육 시설 4",
    sports_category: "baseball",
    stadium_location: "주소 4",
    stadium_price: "가격 4",
    stadium_info: "체육 시설 정보 4",
    stadium_image: StadiumImage
  }, {
    stadium_name: "Stadium 5",
    sports_category: "basketball",
    stadium_location: "Address 5",
    stadium_price: "Price 5",
    stadium_info: "Stadium Information 5",
    stadium_image: StadiumImage
  },
  {
    stadium_name: "체육 시설 6",
    sports_category: "futsal",
    stadium_location: "주소 6",
    stadium_price: "가격 6",
    stadium_info: "체육 시설 정보 6",
    stadium_image: StadiumImage
  }, {
    stadium_name: "Stadium 7",
    sports_category: "baseball",
    stadium_location: "Address 7",
    stadium_price: "Price 7",
    stadium_info: "Stadium Information 7",
    stadium_image: StadiumImage
  },
  {
    stadium_name: "체육 시설 8",
    sports_category: "basketball",
    stadium_location: "주소 8",
    stadium_price: "가격 8",
    stadium_info: "체육 시설 정보 8",
    stadium_image: StadiumImage
  }
];

const per_page = 7;

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
`

function StadiumPage() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sports_category = params.get('sports_category');
    const stadium_name = params.get('stadium_name');
    const stadium_location = params.get('stadium_location');

    let filtered = dummyData;

    if (sports_category) {
      filtered = filtered.filter(item => item.sports_category === sports_category);
    }

    if (stadium_name) {
      filtered = filtered.filter(item =>
        item.stadium_name.toLowerCase().includes(stadium_name.toLowerCase())
      );
    }

    if (stadium_location && stadium_location !== "NULL") {
      const filteredLocation = filtered.filter(item =>
        item.stadium_location.slice(0, 2) === stadium_location.slice(0, 2)
      );
      filtered = filteredLocation;
    }
  
    setFilteredData(filtered);
  }, [location]);


  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  }

  const offset = currentPage * per_page;

  const currentPageData = filteredData
    .slice(offset, offset + per_page)
    .map((data, index) => (
      <Stadium
        key={index}
        name={data.stadium_name}
        address={data.stadium_location}
        image={data.stadium_image}
        price={data.stadium_price}
        info={data.stadium_info}
      />
    ));

  const pageCount = Math.ceil(filteredData.length / per_page);

  return (
    <div>
      {currentPageData}
      <Pagination
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}

export default StadiumPage;
