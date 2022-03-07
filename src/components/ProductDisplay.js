import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCartActionCreator } from "../reduxStore/shoppingCartState";

export default function ProductDisplay(props) {
  const dispatch = useDispatch();

  const { product } = props;

  const { id, title, brand, price, description, image } = product;

  const handleAddToCart = () => {
    console.log("This func has been call");

    dispatch(addToCartActionCreator(product));
  };

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "95vw",
        margin: "auto",
        padding: "2px",
        marginBottom: "8px",
        marginTop: "8px",
      }}
    >
      <div>
        <h4>${price / 100} /day</h4>

        <h4>{title}</h4>
        <h4>{brand}</h4>
      </div>
      <img src={image} style={{ height: "20vh" }}></img>

      <div>
        <h4 variant="body2" color="text.secondary">
          {description}
        </h4>
      </div>
      <div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}
