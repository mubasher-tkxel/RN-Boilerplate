import { MMKV } from "react-native-mmkv";

export const storage = new MMKV()


export const getData = (key) => {
    const data = storage.getString(key)
    if (data) return JSON.parse(data)
    return null
}

export const setData = (key, data) => {
    storage.set(key, JSON.stringify(data))
}