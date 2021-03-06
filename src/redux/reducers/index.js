import { combineReducers } from "redux";
import auth  from "./authReducer";
import loading from "./loadingReducer";

export const appReducer = combineReducers({
  auth,
  loading
});

const rootReducer = (state, action) => {
  if (action.type === "USER_CLEAR") {
    localStorage.clear();
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;