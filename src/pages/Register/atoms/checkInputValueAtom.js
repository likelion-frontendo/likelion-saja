import {atom} from "recoil";

/* 이메일 확인 */
export const emailVisibleAtom = atom({
  key: "emailVisibleAtom",
  default: false,
});

/* 비밀번호 확인 */
export const passwordVisibleAtom = atom({
  key: "passwordVisibleAtom",
  default: false,
});

/* 비밀번호 중복 확인 */
export const passwordConfirmVisibleAtom = atom({
  key: "passwordConfirmVisibleAtom",
  default: false,
});

/* 이름 확인 */
export const nameVisibleAtom = atom({
  key: "nameVisibleAtom",
  default: false,
});

/* 휴대폰 확인 */
export const mobileVisibleAtom = atom({
  key: "mobileConfirmVisibleAtom",
  default: false,
});
