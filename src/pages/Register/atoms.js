import {atom} from "recoil";

// input 입력값
export const emailAtom = atom({
  key: "emailAtom",
  default: "",
});

export const passwordAtom = atom({
  key: "passwordAtom",
  default: "",
});

export const passwordConfirmAtom = atom({
  key: "passwordConfirmAtom",
  default: "",
});

export const nameAtom = atom({
  key: "nameAtom",
  default: "",
});

export const mobileAtom = atom({
  key: "mobileAtom",
  default: "",
});

export const birthdayAtom = atom({
  key: "birthdayAtom",
  default: "",
});

export const imageAtom = atom({
  key: "imageAtom",
  default: null,
});

export const imageURLAtom = atom({
  key: "imageURLAtom",
  default: "",
});

export const currentUserAtom = atom({
  key: "currentUserAtom",
  default: null,
});

// input 입력값 통과 유무
export const emailVisibleAtom = atom({
  key: "emailVisibleAtom",
  default: false,
});

export const passwordVisibleAtom = atom({
  key: "passwordVisibleAtom",
  default: false,
});

export const passwordConfirmVisibleAtom = atom({
  key: "passwordConfirmVisibleAtom",
  default: false,
});

export const nameVisibleAtom = atom({
  key: "nameVisibleAtom",
  default: false,
});

export const mobileVisibleAtom = atom({
  key: "mobileConfirmVisibleAtom",
  default: false,
});

//경고창 텍스트

export const emailWarningAtom = atom({
  key: "emailWarningAtom",
  default: "",
});

export const passwordWarningAtom = atom({
  key: "passwordWarningAtom",
  default: "",
});

export const passwordConfirmWarningAtom = atom({
  key: "passwordConfirmWarningAtom",
  default: "",
});

export const passConfirmWarningAtom = atom({
  key: "passConfirmWarningAtom",
  default: "",
});

export const nameWarningAtom = atom({
  key: "nameWarningAtom",
  default: "",
});

export const mobileWarningAtom = atom({
  key: "mobileWarningAtom",
  default: "",
});

// 다중선택state

export const checkedAllAtom = atom({
  key: "checkedAllAtom",
  default: false,
});

export const checkedTermsAtom = atom({
  key: "checkedTermsAtom",
  default: false,
});

export const checkedAgeAtom = atom({
  key: "checkedAgeAtom",
  default: false,
});

export const checkedMarketingAtom = atom({
  key: "checkedMarketingAtom",
  default: false,
});
