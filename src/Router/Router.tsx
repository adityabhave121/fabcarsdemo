import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import Login from "../PageContent/Login";

import { getAllRoutes } from "./routes";

import { LOGIN_URL, HOME_URL } from "../Constants/app.constants";
import { fakeAuth } from "../AuthUtils/auth.utils";

const RootComponent = () => {
  // if (!fakeAuth.signedIn) {
  //   return <Redirect to={LOGIN_URL} />;
  // } else {
  return <Redirect to={HOME_URL} />;
  // }
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={RootComponent} /> */}
        {/* <Route exact path={LOGIN_URL} component={Login} /> */}
        <Route exact path="/" component={RootComponent} />
        {getAllRoutes()}
      </Switch>
    </BrowserRouter>
  );
}
