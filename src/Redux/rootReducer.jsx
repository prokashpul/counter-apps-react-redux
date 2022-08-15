import { combineReducers } from "redux";

import CounterReducer from "./Counter/CounterReducer";
import staticCounterReducer from "./StaticCounter/staticCounterReducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
  staticCounter: staticCounterReducer,
});

export default rootReducer;
