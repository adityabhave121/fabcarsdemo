import * as React from "react";
import { connect } from "react-redux";

import {
  updateAppState,
  clearAppState,
  deleteAppState,
} from "../../../Redux/action";
import "./contentHomePage.less";
import "./contentHomePage.css";
import {
  Layout,
  Carousel,
  Card,
  Typography,
  Button,
  Row,
  Col,
  BackTop,
} from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import MySearches from "./MySearches";
import Featuring from "./Featuring";
import CarsYouMayLike from "./CarsYouMayLike";
import SearchByBody from "./SearchByBody";
const { Content } = Layout;

interface Props {
  passedDatafromOtherComp?: string;
}
const { Title } = Typography;
const compId = "compId";
const keyName = "key";

interface ReduxProps {
  updateAppState: (compId: string, key: string, value: any) => void;
  clearAppState: (compId: string, key: string) => void;
  deleteAppState: (compId: string) => void;
  userNameState?: Map<any, any>;
}

interface State {
  tempData: string;
}

class ContentHomePage extends React.Component<Props & ReduxProps, State> {
  render() {
    const SampleNextArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            color: "black",
            fontSize: "15px",
            lineHeight: "1.5715",
          }}
          onClick={onClick}
        >
          <RightOutlined />
        </div>
      );
    };

    const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            color: "black",
            fontSize: "15px",
            lineHeight: "1.5715",
          }}
          onClick={onClick}
        >
          <LeftOutlined />
        </div>
      );
    };

    return (
      <Content
        style={{
          marginTop: "10%",
          overflow: "initial",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <BackTop />
          <Carousel
            vertical
            arrows
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
            style={{ backgroundColor: "#123456", color: "white" }}
          >
            <div>
              <h3 className="top-carousel-item">1</h3>
            </div>
            <div>
              <h3 className="top-carousel-item">2</h3>
            </div>
          </Carousel>
          <MySearches />
          <CarsYouMayLike />
          <Featuring />
          <SearchByBody />
          <Button type="primary">Show More Brands</Button>
        </div>
      </Content>
    );
  }
}

const MapStateToProps = (store) => {
  return {
    userNameState: store.app.get(compId, undefined),
  };
};

export default connect(MapStateToProps, {
  updateAppState,
  clearAppState,
  deleteAppState,
})(ContentHomePage);
