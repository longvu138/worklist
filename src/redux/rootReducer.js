import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import workdateReducer from "./workdates/workdateReducer";

const rootReducer = combineReducers({
  users: userReducer,
  workDates: workdateReducer,
});

export default rootReducer;
