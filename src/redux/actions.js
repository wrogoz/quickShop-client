export const saveProductListFromDb = (shoppingCart) => {
  return {
    type: "SAVESHOPPINGCARTFROMDB",
    shoppingCart,
  };
};
export const resetShoppingCart = () => {
  return {
    type: "RESETSHOPPINGCART",
  };
};
export const addProduct = (array, element) => {
  const result = [...array, element];
  return {
    type: "ADDPRODUCT",
    shoppingCart: result,
  };
};
export const deleteProduct = (shoppingCart, element) => {
  const result = shoppingCart.filter((el) => {
    return el.name !== element;
  });
  return {
    type: "DELETEPRODUCT",
    shoppingCart: result,
  };
};

export const logInUser = () => {
  return {
    type: "LOGIN",
  };
};
export const logOutUser = () => {
  return {
    type: "LOGOUT",
  };
};
