import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userData: {},
  isLoading: true,
  isLogged: false,
  userToken: null,
}

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    signIn: (state, action) => {
      state.isLoading = false
      state.isLogged = true
      state.userToken = action.payload
    },
    signOut: (state, action) => {
      state.isLoading = false
      state.isLogged = false
      state.userToken = null
    },
    continueSession: (state, action) => {
      state.isLoading = false
      state.isLogged = true
      state.userToken = action.payload
    },
  }
})

export const { setUserData, signIn, signOut, continueSession } = auth.actions
export default auth.reducer
