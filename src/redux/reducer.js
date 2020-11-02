const initialState = {
  test: "reducer test",
  isUserLoggedIn: true,
  shoppingCart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isUserLoggedIn: false,
      };

    case "EDITSHOPPINGCART":
      return {
        ...state,
        shoppingCart: action.shoppingCart,
      };
    case "DELETEPRODUCT":
      return {
        state,
        shoppingCart: action.shoppingCart,
      };
    case "RESETSHOPPINGCART":
      return {
        ...state,
        shoppingCart: [],
      };

    default:
      return state;
  }
};
export default reducer;
