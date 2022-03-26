import { setUserData, signIn, signOut, continueSession } from "~redux/reducers/auth"
import { setScreensFlow } from "~redux/reducers/nav"

export const authActions = {
    setUserData, signIn, signOut, continueSession
}
export const navActions = {
    setScreensFlow
}