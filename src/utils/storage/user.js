const { getData } = require(".");

export const getUserToken = () => {
    return getData('userData')?.tokeni
}

