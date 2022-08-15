import { DECREMENT, INCREMENT } from "./ActionTypes";

// increment action
export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

// decrement action

export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
