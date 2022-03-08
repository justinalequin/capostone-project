import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCartActionCreator } from "../../reduxStore/shoppingCartState";
import CartItem from "../CartItem";
import Layout from "../layout/Layout";

const CartPage = (props) => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  console.log(shoppingCart);

  // const total = shoppingCart.reduce((acc, cartItem) => {
  //   return acc + cartItem.price * cartItem.quantity;
  // }, 0);

  const emptyShoppingCart = () => {
    dispatch(emptyCartActionCreator());
  };

  return (
    <Layout>
      <div style={{ marginTop: "88px" }}>
        <h1>Cart Page</h1>
      </div>

      <div>
        <div>
          {shoppingCart.map((product) => (
            <div
              style={{
                backgroundColor: "rgba(250, 250, 250, 0.5)",
                width: "90vw",
                padding: "2px",
                marginBottom: "22px",
                borderRadius: "2px",
              }}
            >
              <CartItem
                product={{
                  id: product.id,
                  title: product.title,
                  brand: product.brand,
                  price: product.price,
                  description: product.description,
                  image: product.image,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </Layout>
  );
};

export default CartPage;
