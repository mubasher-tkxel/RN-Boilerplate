import { configureStore } from "@reduxjs/toolkit"
import { navReducer, authReducer } from "~redux/reducers"

const storeOptions = {
  reducer: {
    nav: navReducer,
    auth: authReducer,
  },
}
if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  storeOptions.middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(createDebugger())
}
const store = configureStore(storeOptions)

export default store