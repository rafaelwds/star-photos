import { combineReducers } from "redux";

import users from "./users";
import images from "./images";

const rootReducer = combineReducers({
  users,
  images,
});

export default rootReducer;
