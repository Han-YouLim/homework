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

export const recoilInput = atom({
    key:'input',
    default: null
})

export const recoilValue = atom({
    key:'value',
    default: 0
})
