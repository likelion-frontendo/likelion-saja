import {atom} from "recoil";

/* 이메일 인풋값 */
export const emailAtom = atom({
  key: "emailAtom",
  default: "",
});

/* 비밀번호 인풋값 */
export const passwordAtom = atom({
  key: "passwordAtom",
  default: "",
});

/* 비밀번호 중복 인풋값 */
export const passwordConfirmAtom = atom({
  key: "passwordConfirmAtom",
  default: "",
});

/* 이름 인풋값 */
export const nameAtom = atom({
  key: "nameAtom",
  default: "",
});

/* 휴대폰 인풋값 */
export const mobileAtom = atom({
  key: "mobileAtom",
  default: "",
});

/* 생년월일 인풋값 */
export const birthdayAtom = atom({
  key: "birthdayAtom",
  default: "",
});

/* 프로필 이미지 인풋값 */
export const profileImageAtom = atom({
  key: "profileImageAtom",
  default: {},
});

/* 프로필 이미지URL */
export const profileImageURLAtom = atom({
  key: "profileImageURLAtom",
  default: "",
});

/* 사용자객체 */
export const currentUserAtom = atom({
  key: "currentUserAtom",
  default: {},
});
