import React, { useState } from 'react';
import StadiumImage from "../../assets/img/logo.png";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

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
  }
];

function StadiumPage() {
  return (
    <div>
      {dummyData.map((data, index) => (
        <Stadium
          key={index}
          name={data.name}
          address={data.address}
          image={data.image}
        />
      ))}
    </div>
  );
}

export default StadiumPage;
