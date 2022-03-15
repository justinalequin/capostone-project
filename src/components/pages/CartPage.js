import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosRequest from "../../axiosRequest";
import { emptyCartActionCreator } from "../../reduxStore/shoppingCartState";
import CartItem from "../CartItem";
import Layout from "../layout/Layout";

const CartPage = (props) => {
  const user = useSelector((state) => state.user);

  const shoppingCart = useSelector((state) => state.shoppingCart);

  console.log("shoppingCart: ", shoppingCart);

  console.log("user: ", user);

  const total = shoppingCart.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

  const dispatch = useDispatch();

  const emptyShoppingCart = () => {
    dispatch(emptyCartActionCreator());
  };

  const confirmOrder = () => {
    // TODO: make an obj with the data the server is expectiong.
    //TODO: Only allow one car at checkout
    //
    const order = {
      vehicleId: shoppingCart[0].id,
      userId: user.id,
      image: shoppingCart[0].image,
      price: shoppingCart[0].price,
      brand: shoppingCart[0].brand,
      title: shoppingCart[0].title,
    };

    try {
      axiosRequest
        .post("/post-order", {
          orderData: order,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  if (!user) {
    return (
      <Layout>
        <div style={{ marginTop: "88px" }}>
          <h1>Confirmation Page</h1>
        </div>

        <h5>Nothing to display yet..</h5>

        <Link to="/sign-in-up">
          <button
            style={{
              backgroundColor: "rgba(0, 40, 104, 1)",
              borderRadius: "4px",
              width: "44vw",
              color: "white",
              margin: "4px",
            }}
          >
            <h2>Login/ Signup</h2>
          </button>
        </Link>
      </Layout>
    );
  }

  if (shoppingCart.length === 0) {
    return (
      <Layout>
        <div style={{ marginTop: "88px" }}>
          <h1>Confirmation Page</h1>
        </div>

        <h5>Nothing to display yet..</h5>

        <Link to="/action-page">
          <button
            style={{
              backgroundColor: "rgba(0, 40, 104, 1)",
              borderRadius: "4px",
              width: "44vw",
              color: "white",
              margin: "4px",
            }}
          >
            <h2>Find a Vehicle</h2>
          </button>
        </Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ marginTop: "88px" }}>
        <h1>Confirmation Page</h1>
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
        <button
          onClick={confirmOrder}
          style={{
            backgroundColor: " rgba(0, 40, 104, 1)",
            color: "white",
            width: "80vw",
            margin: "auto",
            borderRadius: "2px",
            marginBottom: "44px",
          }}
        >
          <h1>Confirm Reservation</h1>
        </button>
      </div>

      <div>
        <button
          onClick={emptyShoppingCart}
          style={{
            marginBottom: "88px",
            backgroundColor: " rgba(0, 40, 104, 1)",
            color: "white",
            width: "44vw",
            height: "6vh",
            borderRadius: "2px",
          }}
        >
          <h4>Cancel Reservation</h4>
        </button>
      </div>
    </Layout>
  );
};

export default CartPage;
