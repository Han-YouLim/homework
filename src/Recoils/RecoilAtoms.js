import { atom } from "recoil"

//userlist from github api
export const recoilUsers = atom({
    key: 'users',
    default: []
})

export const recoilSeaerchWord = atom({
    key:'researchword',
    default: ""
})

export const recoilUser = atom({
    key:'user',
    default: null
})
