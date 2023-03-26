import {atom} from "recoil";

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
