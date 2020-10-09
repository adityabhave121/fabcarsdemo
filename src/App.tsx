import React from "react";
import "./App.less";
import Router from "./Router/Router";
function App() {
  return <Router />;
}

export default App;

// export default connect<ReduxProps>((state) => ({
//   isDarkModeEnabled: state.app.isDarkModeEnabled,
// }))(App)
