import * as React from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "../PageContent/Home";

import { LOGIN_URL } from "../Constants/app.constants";

import { fakeAuth } from "../AuthUtils/auth.utils";

const RequireAuth = ({ children }) => {
  if (!fakeAuth.signedIn) {
    return <Redirect to={LOGIN_URL} />;
  }

  return children;
};

export function getAllRoutes() {
  return (
    // <RequireAuth>
    <Route path="/home" component={Home} />
    // </RequireAuth>
  );
}
