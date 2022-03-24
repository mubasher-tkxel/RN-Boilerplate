import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userData: {}
}

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    }
  }
})

export const { setUserData } = auth.actions
export default auth.reducer
