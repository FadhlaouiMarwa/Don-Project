import { combineReducers } from "redux";
import adminReducer from "../reducers/admin"
import userReducer from "../reducers/user"
const rootReducer=combineReducers({adminReducer,userReducer,})
export default rootReducer;