import { configureStore } from "@reduxjs/toolkit"
import navReducer from "~redux/reducers/nav"
import authReducer from "~redux/reducers/auth"
export const store = configureStore({
  reducer: {
    nav: navReducer,
    auth: authReducer,
  }
})
