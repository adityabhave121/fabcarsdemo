import * as React from "react";
import { connect } from "react-redux";

import {
  updateAppState,
  clearAppState,
  deleteAppState,
} from "../../Redux/action";

import { callApi } from "../../utils/api.utils";
import { API_LOGIN } from "../../Constants/api.constants";

const compId = "compId";
const keyName = "key";

interface ReduxProps {
  updateAppState: (compId: string, key: string, value: any) => void;
  clearAppState: (compId: string, key: string) => void;
  deleteAppState: (compId: string) => void;
  userNameState?: Map<any, any>;
}

interface Props {
  passedDatafromOtherComp?: string;
}

interface State {
  tempData: string;
}

class Login extends React.Component<Props & ReduxProps, State> {
  state: State = {
    tempData: "Hello world",
  };

  onUpdateClick = () => {
    this.props.updateAppState(compId, keyName, "sundeep");
  };

  onClearClick = () => {
    this.props.clearAppState(compId, keyName);
  };

  onDeleteClick = () => {
    this.props.deleteAppState(compId);
  };

  onAiCall = () => {
    const apiParameter = {
      userName: "admin",
      password: "admin",
      userType: 1,
    };
    callApi(apiParameter, API_LOGIN).then((response) => {
      console.log("response :-", response);
    });
  };

  getUserNameFromProps = () => {
    const { userNameState } = this.props;

    if (userNameState) {
      return userNameState.get(keyName);
    }
  };

  render() {
    const userName = this.getUserNameFromProps();

    return (
      <div style={{ display: "flex" }}>
        Login <br />
        {`User Name from props:- ${userName}`}
        <button
          onClick={this.onUpdateClick}
          style={{ backgroundColor: "green" }}
        >
          Add/Update Redux State
        </button>
        <button onClick={this.onClearClick} style={{ backgroundColor: "blue" }}>
          Clear App state
        </button>
        <button onClick={this.onDeleteClick} style={{ backgroundColor: "red" }}>
          Delete App state
        </button>
        <button onClick={this.onAiCall} style={{ backgroundColor: "gray" }}>
          Call API
        </button>
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
})(Login);
