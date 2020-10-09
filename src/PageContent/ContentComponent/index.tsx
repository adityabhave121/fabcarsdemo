import * as React from "react";
import { connect } from "react-redux";

import {
  updateAppState,
  clearAppState,
  deleteAppState,
} from "../../Redux/action";
import "./content.css";
import { Layout, Carousel, Card, Typography, Button, Row, Col } from "antd";
import ContentHomePage from "./ContentHomePage";
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

class ContentComponent extends React.Component<Props & ReduxProps, State> {
  render() {
    return <ContentHomePage />; //condition wise content rendering
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
})(ContentComponent);
