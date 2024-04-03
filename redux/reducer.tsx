import {combineReducers} from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import {enableMapSet} from "immer";
import userReducer from "./UserInfo/slice";

export interface ApplicationState {}

enableMapSet();

const rootReducer = combineReducers({
  userReducer,
});
export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
