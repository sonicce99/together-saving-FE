import { combineReducers } from "redux";
import savingInfoReducer from "./savingInfoReducer";
import savingHistoryReducer from "./savingHistoryReducer";
import challengeSummaryReducer from "./challengeSummaryReducer";

const reducers = combineReducers({
  savingInfoReducer,
  savingHistoryReducer,
  challengeSummaryReducer,
});

export default reducers;
