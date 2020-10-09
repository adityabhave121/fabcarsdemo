import * as React from "react";
import { connect } from "react-redux";

import {
  updateAppState,
  clearAppState,
  deleteAppState,
} from "../../Redux/action";

import "./home.css";
import HeaderComponent from "../HeaderComponent";
import ContentComponent from "../ContentComponent";
import FooterComponent from "../FooterComponent";

interface Props {
  passedDatafromOtherComp?: string;
}

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

class Home extends React.Component<Props & ReduxProps, State> {
  render() {
    return (
      <div>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </div>
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
})(Home);
