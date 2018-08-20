import {
  BURGER_ADDED,
  FRIES_ADDED,
  COKE_ADDED,
  PEPSI_ADDED,
  BURGER_CHANGED,
  FRIES_CHANGED,
  COKE_CHANGED,
  PEPSI_CHANGED
} from "../actions/types";

const INITIAL_STATE = {
  Burger_Quant: 0,
  Burger_Price: 200,
  Fries_Quant: 0,
  Fries_Price: 100,
  Coke_Quant: 0,
  Coke_Price: 50,
  Pepsi_Quant: 0,
  Pepsi_Price: 50
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BURGER_ADDED:
      return { ...state, Burger_Quant: action.payload };
    case FRIES_ADDED:
      return { ...state, Fries_Quant: action.payload };
    case PEPSI_ADDED:
      return { ...state, Pepsi_Quant: action.payload };
    case COKE_ADDED:
      return { ...state, Coke_Quant: action.payload };
    case BURGER_CHANGED:
      return { ...state, Burger_Price: action.payload };
    case FRIES_CHANGED:
      return { ...state, Fries_Price: action.payload };
    case PEPSI_CHANGED:
      return { ...state, Pepsi_Price: action.payload };
    case COKE_CHANGED:
      return { ...state, Coke_Price: action.payload };
    default:
      return state;
  }
};
