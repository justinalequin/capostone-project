import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reduxStore/index";

import Hero from "./components/pages/Hero";
import ActionPage from "./components/pages/ActionPage";
import SignInUp from "./components/pages/SignInUp";
import ProductUploadPage from "./components/pages/ProductUploadPage";
import CartPage from "./components/pages/CartPage";
import UserRentals from "./components/pages/UserRentals";
import NewHostPage from "./components/pages/NewHostPage";

export const shoppingCartContext = React.createContext();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Hero />} />
            <Route path="/sign-in-up" element={<SignInUp />} />
            <Route path="/action-page" element={<ActionPage />} />
            <Route
              path="/admin/product-upload"
              element={<ProductUploadPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user-rentals" element={<UserRentals />} />
            <Route path="/new-host" element={<NewHostPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
