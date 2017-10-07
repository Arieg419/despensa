import { combineReducers } from "redux"
import { navReducer } from "../Navigation/AppNavigation"
import auth from "./auth_reducer"

export default combineReducers({
  navReducer,
  auth
})
