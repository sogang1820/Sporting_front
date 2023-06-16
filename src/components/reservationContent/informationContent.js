import React from 'react';
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
  height: 120px;
  margin-right: 20px;
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
    price: "Price",
    info: "Stadium Information",
    image: StadiumImage,
  },
];

function StadiumDetail() {
  return (
    <div>
      {dummyData.map((data, index) => (
        <InformationPage
          key={index}
          name={data.name}
          address={data.address}
          price={data.price}
          info={data.info}
          image={data.image}
        />
      ))}
    </div>
  );
}

export default StadiumDetail;
