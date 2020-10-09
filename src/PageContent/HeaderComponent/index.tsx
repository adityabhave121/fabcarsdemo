import * as React from "react";
import { connect } from "react-redux";

import {
  updateAppState,
  clearAppState,
  deleteAppState,
} from "../../Redux/action";

import { Layout, Menu, Row, Col, Image, Button, Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";
import "./header.less";
import "./header.css";
// const { Title } = Typography;
const { Header, Content } = Layout;

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

class HeaderComponent extends React.Component<Props & ReduxProps, State> {
  render() {
    return (
      <Header
        style={{
          height: "20%",
          backgroundColor: "#FFF",
          position: "fixed",
          zIndex: 1,
          width: "100%",
          top: 0,
          padding: "0%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "30px",
            backgroundColor: "#F5F5F5",
            paddingLeft: "2%",
          }}
        >
          {/* facebook logos */}
        </div>
        <Row
          align="middle"
          style={{
            backgroundColor: "#FFF",
            paddingLeft: "2%",
            boxShadow: "0px 4px 5px 0px #0000002e",
          }}
        >
          {/* <div className="title">{"Aditya bhave"}</div>; */}
          <Col span={12} style={{ padding: "1%" }}>
            <Col span={3}>
              <Image
                width={73}
                height={73}
                src={require("../../Assets/FAB_Brand-ID_3.png")}
              />
            </Col>
            {/* <div className="logo"></div> */}
          </Col>
          <Col span={12}>
            {/* <Button type="primary">PRESS ME</Button> */}
            <Menu
              // className="custom-menu-item-class"
              direction="rtl"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ borderBottom: "0px" }}
            >
              <Menu.Item className="custom-menu-item-class" key="1">
                Buy
              </Menu.Item>
              <Menu.Item className="custom-menu-item-class" key="2">
                Sell
              </Menu.Item>
              <Menu.Item className="custom-menu-item-class" key="3">
                Subscribe
              </Menu.Item>
              <Menu.Item className="custom-menu-item-class" key="4">
                Why Us?
              </Menu.Item>
              <Menu.Item className="custom-menu-item-class" key="5">
                Contact Us
              </Menu.Item>
              {/* <div> */}
              <Avatar size={32} icon={<UserOutlined />} />
              {/* <Title level={5}>Login</Title> */}
              {/* </div> */}
            </Menu>
          </Col>
        </Row>
      </Header>
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
})(HeaderComponent);
