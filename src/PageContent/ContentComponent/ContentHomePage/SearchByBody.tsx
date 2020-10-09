import * as React from "react";
import { connect } from "react-redux";

import {
  updateAppState,
  clearAppState,
  deleteAppState,
} from "../../../Redux/action";
import "./contentHomePage.css";
import { Layout, Carousel, Card, Typography, Button, Row, Col } from "antd";
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

class SearchByBody extends React.Component<Props & ReduxProps, State> {
  render() {
    return (
      <Row style={{ height: "300px", marginTop: "5%" }}>
        <Col span={24}>
          <Title level={2}>Search By Body Type</Title>
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
})(SearchByBody);
