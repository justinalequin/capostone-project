import { SIGN_OUT_ACTION } from "./userState";

const shoppingCartInitialState = [];

const ADD_ITEM_TO_CART_ACTION = "tbev.com/addItemToCart";

const REMOVE_ITEM_FROM_CART_ACTION = "tbev.com/removeItemFromCart";

const EMPTY_CART_ACTION = "tbev.com/emptyCart";

export const shoppingCartReducer = (
  state = shoppingCartInitialState,
  action
) => {
  if (action.type === SIGN_OUT_ACTION) {
    return shoppingCartInitialState;
  }

  if (action.type === ADD_ITEM_TO_CART_ACTION) {
    const itemFoundInCart = state.find(
      (cartItem) => cartItem.id === action.cartItem.id
    );

    if (!itemFoundInCart) {
      return [...state, { ...action.cartItem, quantity: 1 }];
    }

    const cartWithFoundItemRemoved = state.filter(
      (item) => item.id !== action.cartItem.id
    );

    return [
      ...cartWithFoundItemRemoved,
      { ...action.cartItem, quantity: itemFoundInCart.quantity + 1 },
    ];
  }

  if (action.type === REMOVE_ITEM_FROM_CART_ACTION) {
    return state.filter((item) => item.id !== action.itemId);
  }

  if (action.type === EMPTY_CART_ACTION) {
    return shoppingCartInitialState;
  }

  return state;
};

export const addToCartActionCreator = (product) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART_ACTION,
    cartItem: {
      id: product.id,
      brand: product.brand,
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: product.quantity,
    },
  });
};

export const emptyCartActionCreator = () => ({ type: EMPTY_CART_ACTION });

export const removeFromCartActionCreator = (id) => {
  return {
    type: REMOVE_ITEM_FROM_CART_ACTION,
    itemId: id,
  };
};
