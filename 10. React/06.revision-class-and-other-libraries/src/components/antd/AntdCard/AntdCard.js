import imgBurger from "../../../assets/burger.png"
import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const AntdCard = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={imgBurger}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
};

export default AntdCard;
