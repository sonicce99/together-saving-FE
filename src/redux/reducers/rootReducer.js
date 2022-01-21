import { combineReducers } from "redux";
import savingInfoReducer from "./savingInfoReducer";
import savingHistoryReducer from "./savingHistoryReducer";

const reducers = combineReducers({
  savingInfoReducer,
  savingHistoryReducer,
});

export default reducers;
