import { combineReducers } from "redux";

import { reducerNotifications as notifications } from "./notifications";

const rootReducer = combineReducers({
  notifications,
});

export default rootReducer;
