import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCartActionCreator } from "../../reduxStore/shoppingCartState";
import CartItem from "../CartItem";
import Layout from "../layout/Layout";

const CartPage = (props) => {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const total = shoppingCart.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

  const dispatch = useDispatch();

  const emptyShoppingCart = () => {
    dispatch(emptyCartActionCreator());
  };

  return (
    <Layout>
      <div style={{ marginTop: "88px" }}>
        <h1>Cart Page</h1>
      </div>

      <div style={{ marginBottom: "44px" }}>
        <div>
          {shoppingCart.map((item) => (
            <div key={item.id}>
              <CartItem
                cartItem={{
                  id: item.id,
                  title: item.title,
                  brand: item.brand,
                  price: item.price,
                  description: item.description,
                  image: item.image,
                  quantity: item.quantity,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundColor: " rgba(0, 40, 104, 1)",
          color: "white",
          width: "80vw",
          margin: "auto",
          borderRadius: "2px",
          marginBottom: "44px",
        }}
      >
        <h1>Total: ${total / 100}</h1>
      </div>

      <div>
        <button onClick={emptyShoppingCart}>EMPTY</button>
      </div>
    </Layout>
  );
};

export default CartPage;
