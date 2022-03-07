import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Calendar from "../layout/Calendar";
import axios from "axios";

import ProductDisplay from "../ProductDisplay";

import { useDispatch } from "react-redux";

function ActionPage() {
  const [productData, setProductData] = useState();

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
        Action page with all available vehicle + calendar
      </div>
      <div>
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
    </Layout>
  );
}

export default ActionPage;
