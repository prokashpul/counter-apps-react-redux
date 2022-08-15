import { SDECREMENT, SINCREMENT } from "./ActionTypes";

const initialState = {
  value: 0,
};

const staticCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case SDECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default staticCounterReducer;
