import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "../reducers"
import Config from "../Config/DebugConfig"

// if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
const createAppropriateStore = Config.useReactotron
  ? console.tron.createStore
  : createStore

const store = createAppropriateStore(reducers, compose(applyMiddleware(thunk)))

export default store
