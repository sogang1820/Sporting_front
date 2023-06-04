import React from 'react';
import StadiumImage from "../../assets/img/logo.png";
import styled from 'styled-components';

const BorderBlock = styled.div`
width: 85%;
height: 150px;
position: relative;
background: #FFFFFF;
border: 1px solid #000000;
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
margin-right: 16px;
`

const Content = styled.div`
flex-direction: column;
`

function Stadium({ name, address, image }) {    
  return (
    <div>
        <BorderBlock>
            <Image src={StadiumImage} alt="stadium image" />
            <Content>
            <h2>{name}</h2>
            <p>{address}</p>
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
