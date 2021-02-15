import { combineReducers } from "redux";

import { counterReducer } from "./counter/counter.reducer";
import { userListReducer } from "./user-list/user-list.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userListReducer,
});

export default rootReducer;
