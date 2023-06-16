import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StadiumImage from "../../assets/img/logo.png";
import styled from 'styled-components';

const InfoBlock = styled.div`
  width: 90%;
  height: auto;
  background: #F8F6F4;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  position: relative;
  margin: 0 auto;
  padding-left: 50px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Image = styled.img`
  width: 160px;
  margin-right: 20px;
  object-fit: cover;
`;

const Content = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 0.1;
`;

function InformationPage({ name, address, price, info, image }) {
  return (
    <InfoBlock>
        <Image src={image} alt="stadium image" />
        <Content>
          <h2>{name}</h2>
          <p>{address}</p>
          <p>{price}</p>
          <p>{info}</p>
        </Content>
    </InfoBlock>
  );
}

const dummyData = [
  {
    name: "Stadium 1",
    address: "Address 1",
    price: "Price 1",
    info: "Stadium Information 1",
    image: StadiumImage,
  },
  {
    name: "체육 시설 2",
    address: "주소 2",
    price: "가격 2",
    info: "체육 시설 정보 2",
    image: StadiumImage
  },
  {
    name: "Stadium 3",
    address: "Address 3",
    price: "Price 3",
    info: "Stadium Information 3",
    image: StadiumImage
  },
  {
    name: "체육 시설 4",
    address: "주소 4",
    price: "가격 4",
    info: "체육 시설 정보 4",
    image: StadiumImage
  },{
    name: "Stadium 5",
    address: "Address 5",
    price: "Price 5",
    info: "Stadium Information 5",
    image: StadiumImage
  },
  {
    name: "체육 시설 6",
    address: "주소 6",
    price: "가격 6",
    info: "체육 시설 정보 6",
    image: StadiumImage
  },{
    name: "Stadium 7",
    address: "Address 7",
    price: "Price 7",
    info: "Stadium Information 7",
    image: StadiumImage
  },
  {
    name: "체육 시설 8",
    address: "주소 8",
    price: "가격 8",
    info: "체육 시설 정보 8",
    image: StadiumImage
  }
];

function StadiumDetail() {
  const location = useLocation();
  const [stadiumInfo, setStadiumInfo] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedStadium = searchParams.get('name');
    const stadium = dummyData.find((data) => data.name === selectedStadium);
    setStadiumInfo(stadium);
  }, [location.search]);

  if (!stadiumInfo) {
    return null;
  }

  return (
    <div>
      <InformationPage
        name={stadiumInfo.name}
        address={stadiumInfo.address}
        price={stadiumInfo.price}
        info={stadiumInfo.info}
        image={stadiumInfo.image}
      />
    </div>
  );
}

export default StadiumDetail;
