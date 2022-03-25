import { configureStore } from "@reduxjs/toolkit"
import { navReducer, authReducer } from "~redux/reducers"
export const store = configureStore({
  reducer: {
    nav: navReducer,
    auth: authReducer,
  }
})
