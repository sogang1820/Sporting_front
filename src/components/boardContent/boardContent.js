import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import StadiumImage from "../../assets/img/logo.png";
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Paginate from 'react-paginate';

const BorderBlock = styled.div`
width: 80%;
height: auto;
position: relative;
background: #FFFFFF;
border-top: 1px solid #000000;
border-bottom: 1px solid #000000;
margin: 0 auto;
padding-left: 50px;
margin-top: 32px;
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
    name: "Stadium 1",
    sport: "baseball",
    address: "Address 1",
    price: "Price 1",
    info: "Stadium Information 1",
    image: StadiumImage
  },
  {
    name: "체육 시설 2",
    sport: "basketball",
    address: "주소 2",
    price: "가격 2",
    info: "체육 시설 정보 2",
    image: StadiumImage
  },
  {
    name: "Stadium 3",
    sport: "futsal",
    address: "Address 3",
    price: "Price 3",
    info: "Stadium Information 3",
    image: StadiumImage
  },
  {
    name: "체육 시설 4",
    sport: "baseball",
    address: "주소 4",
    price: "가격 4",
    info: "체육 시설 정보 4",
    image: StadiumImage
  }, {
    name: "Stadium 5",
    sport: "basketball",
    address: "Address 5",
    price: "Price 5",
    info: "Stadium Information 5",
    image: StadiumImage
  },
  {
    name: "체육 시설 6",
    sport: "futsal",
    address: "주소 6",
    price: "가격 6",
    info: "체육 시설 정보 6",
    image: StadiumImage
  }, {
    name: "Stadium 7",
    sport: "baseball",
    address: "Address 7",
    price: "Price 7",
    info: "Stadium Information 7",
    image: StadiumImage
  },
  {
    name: "체육 시설 8",
    sport: "basketball",
    address: "주소 8",
    price: "가격 8",
    info: "체육 시설 정보 8",
    image: StadiumImage
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
  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  }

  const offset = currentPage * per_page;

  const currentPageData = dummyData
    .slice(offset, offset + per_page)
    .map((data, index) => (
      <Stadium
        key={index}
        name={data.name}
        address={data.address}
        image={data.image}
        price={data.price}
        info={data.info}
      />
    ));

  const pageCount = Math.ceil(dummyData.length / per_page);

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
