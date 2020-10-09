import { Map } from "immutable";
import {
  UPDATE_APP_STATE,
  CLEAR_APP_STATE,
  DELETE_APP_STATE,
} from "../../Constants/app.constants";

const initialState = Map();

export const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_APP_STATE: {
      const { compId, payload } = action;
      const { key, value } = payload;

      return state.setIn([compId, key], value);
    }

    case CLEAR_APP_STATE: {
      const { compId, payload } = action;
      const { key } = payload;

      return state.deleteIn([compId, key]);
    }

    case DELETE_APP_STATE: {
      const { compId } = action;

      return state.delete(compId);
    }

    default:
      return state;
  }
};
