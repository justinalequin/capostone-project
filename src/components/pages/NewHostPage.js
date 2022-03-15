import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { useSelector } from "react-redux";

function NewHostPage() {
  const user = useSelector((state) => state.user);
  return (
    <Layout>
      <div style={{ marginTop: "88px" }}>
        <h1>Become a Host</h1>
      </div>
      <div style={{ width: "66vw", margin: "auto" }}>
        <p style={{ fontWeight: "bold" }}>
          Want to make some extra cash while you're not using your vehicle?
        </p>
      </div>

      <div>
        <img
          style={{ height: "25vh" }}
          src="https://static.timesofisrael.com/www/uploads/2014/06/eldan_635x357-1024x640.jpg"
        ></img>
      </div>

      <div>
        <p style={{ fontWeight: "bold" }}>We'll make it easy for you!</p>
      </div>

      <div
        style={{
          backgroundColor: "lightgray",
          width: "66vw",
          margin: "auto",
          padding: "6px",
          borderRadius: "4px",
        }}
      >
        <ul>
          <li style={{ margin: "4px" }}>Create an account</li>
          <li style={{ margin: "4px" }}>Use valid referral code</li>
          <li style={{ margin: "4px" }}>Input required fields</li>
          <li style={{ margin: "4px" }}>Manage availability</li>
        </ul>
      </div>

      {user ? (
        <Link to="/admin/product-upload">
          <button
            style={{
              backgroundColor: "rgba(0, 40, 104, 1)",
              height: "5vh",
              width: "30vw",
              borderRadius: "4px",
              padding: "2px",
              color: "white",
              marginTop: "12px",
            }}
          >
            List Vehicle
          </button>
        </Link>
      ) : (
        <Link to="/sign-in-up">
          <button
            style={{
              backgroundColor: "rgba(0, 40, 104, 1)",
              height: "5vh",
              width: "30vw",
              borderRadius: "4px",
              padding: "2px",
              color: "white",
              marginTop: "12px",
            }}
          >
            Sign Up
          </button>
        </Link>
      )}
    </Layout>
  );
}

export default NewHostPage;
