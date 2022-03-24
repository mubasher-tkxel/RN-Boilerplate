import React, { useEffect } from "react"
import SplashScreen from "react-native-splash-screen"
import { useSelector, useDispatch } from "react-redux"
import { retrieveData } from "../../utils"

const LoadingScreen = props => {
  const dispatch = useDispatch()
  const onProcess = () => {
    SplashScreen.hide()
    const userData = retrieveData("userData")
    if (userData) {
      props.navigation.navigate("Drawer")
    }
    else {
      props.navigation.navigate("OnBoarding")
    }
  }

  useEffect(() => {
    onProcess()
  })

  return null
}

export default LoadingScreen