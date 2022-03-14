import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartReducer } from "./shoppingCartState";
import { userReducer } from "./userState";
import { confirmedOrderReducer } from "./confirmedOrderState";

const store = configureStore({
  preloadedState:
    JSON.parse(window.localStorage.getItem("applicationState")) || {},
  reducer: {
    shoppingCart: shoppingCartReducer,
    user: userReducer,
    confirmedOrder: confirmedOrderReducer,
  },
});

const handleChange = () => {
  const newState = store.getState();

  window.localStorage.setItem("applicationState", JSON.stringify(newState));
};

store.subscribe(handleChange);

export default store;
