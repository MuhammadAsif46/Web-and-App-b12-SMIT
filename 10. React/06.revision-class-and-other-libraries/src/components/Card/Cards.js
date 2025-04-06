import React from 'react';
import { Card } from 'antd';
import burgerImage from "../../assets/burger.png"
const { Meta } = Card;
const Cards = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={burgerImage} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default Cards;