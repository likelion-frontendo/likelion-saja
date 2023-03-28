import {atom} from "recoil";

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

export const profileImageAtom = atom({
  key: "profileImageAtom",
  default: {},
});

export const profileImageURLAtom = atom({
  key: "profileImageURLAtom",
  default: "",
});

export const currentUserAtom = atom({
  key: "currentUserAtom",
  default: {},
});
