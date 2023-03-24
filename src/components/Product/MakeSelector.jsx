import {selector} from "recoil";

export const makeIsLoadingSelector = (atom) =>
  selector({
    key: `isLoadingSelector_${atom.key}`,
    get: ({get}) => {
      const value = get(atom);
      return value.length === 0;
    },
  });

export const makeErrorSelector = (atom) =>
  selector({
    key: `errorSelector_${atom.key}`,
    get: ({get}) => {
      const value = get(atom);
      if (value.length === 0) {
        return `Error fetching ${atom.key}`;
      } else {
        return null;
      }
    },
  });
