import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  screensFlow: "calendar",
  previousScreen: "inbox",
  nextScreen: "interest"
}

export const nav = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setScreensFlow: (state, action) => {
      state.screensFlow = action.payload.screensFlow
      state.previousScreen = action.payload.previousScreen
      state.nextScreen = action.payload.nextScreen
    }
  }
})

export const { setScreensFlow } = nav.actions
export default nav.reducer
