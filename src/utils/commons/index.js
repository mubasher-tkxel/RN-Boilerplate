
import { authUrls } from "~consts";
import langDict from "~translations/en";
export const checkIfAuthUrl = (targetUrl) => {
    var isAuthUrl = false;
    authUrls.forEach(url => {
        if (targetUrl.includes(url)) {
            isAuthUrl = true
        }
    })
    return isAuthUrl
}

export const getText = (key) => langDict[key]