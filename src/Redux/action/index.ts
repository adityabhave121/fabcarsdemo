import {
  UPDATE_APP_STATE,
  CLEAR_APP_STATE,
  DELETE_APP_STATE,
} from "../../Constants/app.constants";

export function updateAppState(compId: string, key: string, value: any) {
  return { type: UPDATE_APP_STATE, compId, payload: { key, value } };
}

export function clearAppState(compId, key) {
  return { type: CLEAR_APP_STATE, payload: { key }, compId };
}

export function deleteAppState(compId) {
  return { type: DELETE_APP_STATE, compId };
}
