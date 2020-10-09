import * as React from "react";
import { connect } from "react-redux";

import {
  updateAppState,
  clearAppState,
  deleteAppState,
} from "../../../Redux/action";
import "./contentHomePage.css";
import {
  Layout,
  Carousel,
  Card,
  Typography,
  Button,
  Row,
  Col,
  Space,
} from "antd";
import { getSingleCard } from "./contentHomePage.utils";
const { Content } = Layout;
const { Meta } = Card;
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

class MySearches extends React.Component<Props & ReduxProps, State> {
  getCards(n) {
    const fields: JSX.Element[] = [];
    for (let i = 1; i <= n; i++) {
      fields.push(getSingleCard(this.props)); //pass single item data here
    }
    return fields;
  }

  render() {
    return (
      <Row style={{ height: "200px", marginTop: "5%" }}>
        <Col span={24}>
          <Title level={2}>My Searches</Title>
          <Row gutter={16}>
            <Space size={5}>{this.getCards(4)}</Space>
          </Row>
        </Col>
      </Row>
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
})(MySearches);
