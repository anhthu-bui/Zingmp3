import { combineReducers } from "redux";
import saveReducer from "./saveData";

const rootReducer = combineReducers({
  saveReducer,
});
export default rootReducer;
