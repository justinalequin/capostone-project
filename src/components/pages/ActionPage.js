import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Calendar from "../layout/Calendar";
import axios from "axios";

import ProductDisplay from "../ProductDisplay";

import { useDispatch } from "react-redux";

function ActionPage() {
  const [productData, setProductData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5100/get-products")
      .then((response) => setProductData(response.data));
  }, []);

  if (!productData) {
    return null;
  }

  return (
    <Layout>
      <div style={{ marginTop: "88px" }}>
        <h1>Rent a Vehicle</h1>

        <div
          style={{
            width: "80vw",
            margin: "auto",
            backgroundColor: "rgba(0, 40, 104, 1)",
            padding: "16px",
            border: "solid white 1px",
            borderRadius: "4px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          <Calendar></Calendar>
        </div>

        <div style={{ marginBottom: "88px" }}>
          {productData.map((product) => (
            <div>
              <div key={product.id}></div>
              <ProductDisplay
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
    </Layout>
  );
}

export default ActionPage;
