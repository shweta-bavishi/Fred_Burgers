import { PRODUCT_ADDED, PRODUCT_REMOVED } from "./types";

export const add_product = (id, cart) => {
  var flag = false;
  for (var i = 0; i < cart.length; i++) {
    if (id == cart[i].id) {
      flag = true;
      cart[i].quant = cart[i].quant + 1;
    }
  }
  if (flag == false) {
    cart.push({ id, quant: 1 });
  }
  return {
    type: PRODUCT_ADDED,
    payload: cart
  };
};
export const remove_product = (id, cart) => {
  for (var i = 0; i < cart.length; i++) {
    if (id == cart[i].id && cart[i].quant > 0) {
      cart[i].quant = cart[i].quant - 1;
    }
  }
  return {
    type: PRODUCT_REMOVED,
    payload: cart
  };
};
