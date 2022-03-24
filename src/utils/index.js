import { authUrls } from "../consts/appConsts";
import langDict from "../translations/en";
import { retrieveData } from "./storage";

export const checkIfAuthUrl = (targetUrl) => {
    var isAuthUrl = false;
    authUrls.forEach(url => {
        if (targetUrl.includes(url)) {
            isAuthUrl = true
        }
    })
    return checkIfAuthUrl
}

export const getText = (key) => langDict[key]

export {retrieveData}