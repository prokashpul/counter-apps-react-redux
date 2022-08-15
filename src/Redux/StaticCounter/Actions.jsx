import { SDECREMENT, SINCREMENT } from "./ActionTypes";

// increment action
export const sincrement = () => {
  return {
    type: SINCREMENT,
  };
};

// decrement action

export const sdecrement = () => {
  return {
    type: SDECREMENT,
  };
};
