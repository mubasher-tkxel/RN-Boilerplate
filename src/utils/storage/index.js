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

export const updateData = (key, data) => {
    let storeData = storage.getString(key)
    if (storeData) {
        storeData = JSON.parse(storeData);
        storeData = {...storeData, data}
        setData(key, storeData)
        return 1
    } return 0
}

export const deleteData = (key) => {
    storage.delete(key)
}
