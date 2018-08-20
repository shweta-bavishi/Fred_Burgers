import {
  BURGER_ADDED,
  PEPSI_ADDED,
  FRIES_ADDED,
  COKE_ADDED,
  BURGER_CHANGED,
  FRIES_CHANGED,
  COKE_CHANGED,
  PEPSI_CHANGED
} from "./types";

export const add_burger = quant => {
  return {
    type: BURGER_ADDED,
    payload: quant + 1
  };
};
export const add_pepsi = quant => {
  return {
    type: PEPSI_ADDED,
    payload: quant + 1
  };
};
export const add_fries = quant => {
  return {
    type: FRIES_ADDED,
    payload: quant + 1
  };
};
export const add_coke = quant => {
  return {
    type: COKE_ADDED,
    payload: quant + 1
  };
};
export const remove_burger = quant => {
  return {
    type: BURGER_ADDED,
    payload: quant - 1
  };
};
export const remove_pepsi = quant => {
  return {
    type: PEPSI_ADDED,
    payload: quant - 1
  };
};
export const remove_fries = quant => {
  return {
    type: FRIES_ADDED,
    payload: quant - 1
  };
};
export const remove_coke = quant => {
  return {
    type: COKE_ADDED,
    payload: quant - 1
  };
};
export const change_burger = quant => {
  return {
    type: BURGER_CHANGED,
    payload: quant
  };
};
export const change_pepsi = quant => {
  return {
    type: PEPSI_CHANGED,
    payload: quant
  };
};
export const change_fries = quant => {
  return {
    type: FRIES_CHANGED,
    payload: quant
  };
};
export const change_coke = quant => {
  return {
    type: COKE_CHANGED,
    payload: quant
  };
};
