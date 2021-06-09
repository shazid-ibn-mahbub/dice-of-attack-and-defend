import { combineReducers } from "redux";
import playerRollReducer from "./playerRoll";

const rootReducer = combineReducers({
  playerRoll: playerRollReducer,
});

export default rootReducer;
