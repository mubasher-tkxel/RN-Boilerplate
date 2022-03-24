import { MMKV } from "react-native-mmkv";

export const storage = new MMKV()


export const retrieveData = (key) => {
    const data = storage.getString(key)
    if (data) return JSON.parse(data)
    return null
}