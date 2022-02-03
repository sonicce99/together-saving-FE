import { combineReducers } from "redux";
import savingInfoReducer from "./savingInfoReducer";
import savingHistoryReducer from "./savingHistoryReducer";
import challengeSummaryReducer from "./challengeSummaryReducer";
import savingRequestReucer from "./savingRequestReducer";

const reducers = combineReducers({
  savingInfoReducer,
  savingHistoryReducer,
  challengeSummaryReducer,
  savingRequestReucer,
});

export default reducers;
