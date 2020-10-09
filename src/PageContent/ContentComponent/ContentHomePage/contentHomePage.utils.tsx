import * as React from "react";
import { Card, Col, Image, Row, Typography } from "antd";
import "./contentHomePage.less";

// const { Meta } = Card;
const { Title } = Typography;

export function getSingleCard(props) {
  return (
    <Col span={6}>
      <Card size="small" hoverable style={{ width: 300, height: 100 }}>
        <Row>
          <img
            width={"120"}
            // style={{ width: 60 }}
            src={require("../../../Assets/Car_Rectangle.png")}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="home-mysearches-text home-mysearches-text-title">
              2018 GL-Class AMG-650
            </span>
            <span className="home-mysearches-text">Mercedes Benz</span>
            <span className="home-mysearches-text home-mysearches-text-price">
              $43,545
            </span>
          </div>
        </Row>
      </Card>
    </Col>
  );
}
