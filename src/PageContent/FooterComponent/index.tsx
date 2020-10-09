import * as React from "react";
import { connect } from "react-redux";

import {
  updateAppState,
  clearAppState,
  deleteAppState,
} from "../../Redux/action";

import { Layout } from "antd";
const { Footer } = Layout;

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

class FooterComponent extends React.Component<Props & ReduxProps, State> {
  render() {
    return (
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#000000",
          color: "#FFFFFF",
        }}
      >
        Copyright @ 2020 FabCars
      </Footer>
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
})(FooterComponent);
