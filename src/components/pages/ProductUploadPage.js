import axios from "axios";
import React, { useState } from "react";
import Layout from "../layout/Layout";

const uploadFromInitialState = {
  title: "",
  brand: "",
  description: "",
  image: "",
  price: "",
};

const ProductUploadPage = (props) => {
  const [uploadProductForm, setUploadProductForm] = useState(
    uploadFromInitialState
  );

  const onSubmit = () => {
    try {
      axios
        .post("http://localhost:5100/upload-product", {
          productData: {
            ...uploadProductForm,
            price: Number(uploadProductForm.price),
          },
        })
        .then(() => {
          setUploadProductForm(uploadFromInitialState);
        });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Layout>
      <div
        style={{
          marginTop: "88PX",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Upload product</h1>
        </div>
        <div
          style={{
            width: "80vw",
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <label>Title -</label>
            <input
              id="title"
              value={uploadProductForm.title}
              onChange={(event) => {
                setUploadProductForm({
                  ...uploadProductForm,
                  title: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <label>Brand -</label>

            <input
              id="brand"
              value={uploadProductForm.brand}
              onChange={(event) => {
                setUploadProductForm({
                  ...uploadProductForm,
                  brand: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <label>Description -</label>

            <input
              id="description"
              value={uploadProductForm.description}
              onChange={(event) => {
                setUploadProductForm({
                  ...uploadProductForm,
                  description: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <label>Image -</label>

            <input
              id="image"
              value={uploadProductForm.image}
              onChange={(event) => {
                setUploadProductForm({
                  ...uploadProductForm,
                  image: event.target.value,
                });
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <label>Price -</label>

            <input
              id="price"
              label="Price"
              value={uploadProductForm.price}
              onChange={(event) => {
                setUploadProductForm({
                  ...uploadProductForm,
                  price: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div>
          <button variant="contained" onClick={onSubmit}>
            Upload product
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductUploadPage;
