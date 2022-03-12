import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCartActionCreator } from "../reduxStore/shoppingCartState";

export default function ProductDisplay(props) {
  const dispatch = useDispatch();

  const { product } = props;

  const { id, title, brand, price, description, image, quantity } = product;

  const handleAddToCart = () => {
    console.log("This func has been call");
    console.log(product);

    dispatch(addToCartActionCreator(product));
  };

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "95vw",
        margin: "auto",
        marginBottom: "10px",
        marginTop: "10px",
        paddingBottom: "16px",
        paddingTop: "2px",
        borderRadius: "4px",
        border: "solid white 1px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "80vw",
          margin: "auto",
          padding: "4px",
          borderRadius: "4px",
          marginTop: "16px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "rgba(0, 40, 104, 1)",
            width: "80vw",
            color: "white",
            margin: "auto",
            marginBottom: "8px",
            marginTop: "8px",
            borderRadius: "4px",
            textDecoration: "underline",
          }}
        >
          <h3>{brand}</h3>
          <h3>{title}</h3>
        </div>
        <img src={image} style={{ height: "20vh", borderRadius: "2px" }}></img>

        <div
          style={{
            backgroundColor: " rgba(0, 40, 104, 1)",
            color: "white",
            width: "80vw",
            margin: "auto",
            borderRadius: "2px",
          }}
        >
          <h4>{description}</h4>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          onClick={handleAddToCart}
          style={{
            textDecoration: "underline",
            backgroundColor: "rgba(0, 40, 104, 1)",
            width: "25vw",
            height: "6vh",
            borderRadius: "4px",
            color: "white",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <h4>Add to cart</h4>
        </button>
        <h4>${price / 100} /day</h4>
      </div>
    </div>
  );
}
