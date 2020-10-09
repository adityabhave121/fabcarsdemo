import { combineReducers } from "redux";
import { appReducers } from "./appReducers";

const rootReducer = combineReducers({
  app: appReducers,
});

export default rootReducer;
