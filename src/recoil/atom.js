import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState",
  default:0
});

export const doubleState = selector({
  key: "doubleState",
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  }
});