import {atom} from "recoil";

/* 이미지 */
export const imagesAtom = atom({
    key: "imagesAtom",
    default: []
})

/* 이미지 리스트 */
export const imageListAtom = atom({
    key: "imageListAtom",
    default: []
})

/* 제목 */
export const postTitleAtom = atom({
    key: "postTitleAtom",
    default: ""
})

/* 우편 */
export const addressAtom = atom({
    key: "addressAtom",
    default: ""
})


/* 팝업 */
export const postcodePopupAtom = atom({
    key: "postcodePopupAtom",
    default: null
})

/* 벨 */
export const priceAtom = atom({
    key: "priceAtom",
    default: 0
})

/* 내용 */
export const postContentAtom = atom({
    key: "postContentAtom",
    default: ""
})