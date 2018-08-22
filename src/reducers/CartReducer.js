import { PRODUCT_ADDED, PRODUCT_REMOVED } from "../actions/types";

const INITIAL_STATE = {
  cart: [{ id: 0, quant: 0 }]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      return { ...state, cart: action.payload };
    case PRODUCT_REMOVED:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
