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

export const mobileWarningAtom = atom({
  key: "mobileWarningAtom",
  default: "",
});
