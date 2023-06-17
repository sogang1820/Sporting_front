import React, { useState } from 'react';
import StadiumImage from "../../assets/img/logo.png";
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Paginate from 'react-paginate';

const BorderBlock = styled.div`
width: 80%;
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
height: 90px;
float: left;
margin-right: 20px;
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
`

const TimeBlockContainer = styled.div`
display: flex;
`

const TimeBlock = styled.div`
padding: 5px;
margin: 5px;
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

function Stadium({ name, address, image }) {   
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    console.log(date);
    setSelectedDate(date);
  }

  const blocks = new Array(8).fill(null);

  return (
    <div>
        <BorderBlock>
            <Image src={StadiumImage} alt="stadium image" />
            <Content>
            <h2>{name}</h2>
            <p>{address}</p>
            <DatePickerContainer>
              <CustomDatePicker
                selected={selectedDate}
                onChange={handleDateSelect}
                dateFormat="yyyy-MM-dd"
              />
              <TimeBlockContainer>
              {blocks.map((_, index) => (
                <TimeBlock key={index} onClick={()=>console.log(`Time ${index+1} selected.`)}>
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
    address: "Address 1",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 2",
    address: "주소 2",
    image: {StadiumImage}
  },
  {
    name: "Stadium 3",
    address: "Address 3",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 4",
    address: "주소 4",
    image: {StadiumImage}
  },{
    name: "Stadium 5",
    address: "Address 5",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 6",
    address: "주소 6",
    image: {StadiumImage}
  },{
    name: "Stadium 7",
    address: "Address 7",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 8",
    address: "주소 8",
    image: {StadiumImage}
  },{
    name: "Stadium 9",
    address: "Address 9",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 10",
    address: "주소 10",
    image: {StadiumImage}
  },
  {
    name: "Stadium 11",
    address: "Address 11",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 12",
    address: "주소 12",
    image: {StadiumImage}
  },
  {
    name: "Stadium 13",
    address: "Address 13",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 14",
    address: "주소 14",
    image: {StadiumImage}
  },{
    name: "Stadium 15",
    address: "Address 15",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 16",
    address: "주소 16",
    image: {StadiumImage}
  },{
    name: "Stadium 17",
    address: "Address 17",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 18",
    address: "주소 18",
    image: {StadiumImage}
  },{
    name: "Stadium 19",
    address: "Address 19",
    image: {StadiumImage}
  },
  {
    name: "체육 시설 20",
    address: "주소 20",
    image: {StadiumImage}
  },
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

  function handlePageClick({selected: selectedPage}) {
    setCurrentPage(selectedPage);
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
