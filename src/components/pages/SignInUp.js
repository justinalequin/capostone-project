import React, { useState } from "react";
import Layout from "../layout/Layout";
import Modal from "../layout/Modal";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInActionCreator,
  SIGN_IN_ACTION,
  SIGN_OUT_ACTION,
} from "../../reduxStore/userState";
import { useNavigate } from "react-router-dom";

const SignInUp = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [signInForm, setSignInForm] = useState({
    userName: "",
    password: "",
  });

  const onSubmit = () => {
    console.log("signInForm: ", signInForm);

    axios
      .post("http://localhost:5100/sign-in", {
        userCredentials: signInForm,
      })
      .then((response) => {
        console.log("response: ", response.data);
        dispatch({
          type: SIGN_IN_ACTION,
          payload: {
            userData: response.data,
          },
        });
      });
  };

  const handleSignOut = () => {
    dispatch({ type: SIGN_OUT_ACTION });
  };

  if (user) {
    return (
      <Layout>
        <div style={{ marginTop: "88px" }}>
          <h1>Hi, {user.firstName}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/action-page">
              <button style={{ width: "44vw", margin: "4px" }}>
                Find a vehicle
              </button>
            </Link>

            <Link to="/user-rentals">
              <button style={{ width: "44vw", margin: "4px" }}>
                My Rentals
              </button>
            </Link>

            <button
              onClick={handleSignOut}
              style={{ width: "44vw", margin: "4px" }}
            >
              Sign out
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "88px",
          marginBottom: "22px",
          padding: "4px",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(126, 129, 128, .5)",
            width: "80vw",
            borderRadius: "2px",
          }}
        >
          <div style={{}}>
            <div style={{ margin: "5px" }}>
              <h4 style={{ marginBottom: "4px" }}>Username: </h4>
              <input
                type="text"
                placeholder="Please Enter Username"
                style={{ borderRadius: "4px" }}
                onChange={(event) => {
                  setSignInForm({
                    ...signInForm,
                    userName: event.target.value,
                  });
                }}
              ></input>
            </div>
            <div style={{ margin: "5px" }}>
              <h4 style={{ marginBottom: "4px" }}>Password: </h4>
              <input
                type="text"
                placeholder="Please Enter Password"
                style={{ borderRadius: "4px" }}
                onChange={(event) => {
                  setSignInForm({
                    ...signInForm,
                    password: event.target.value,
                  });
                }}
              ></input>
            </div>
            <button
              onClick={onSubmit}
              style={{
                backgroundColor: "rgba(0, 40, 104, 1)",
                borderRadius: "4px",
                width: "44vw",
                color: "white",
                marginBottom: "16px",
                marginTop: "8px",
              }}
            >
              <h4>SIGN IN</h4>
            </button>
          </div>
        </div>

        <div style={{ marginTop: "12px" }}>
          <h3>New User? Click the button below to sign up!</h3>
          <Modal />
        </div>
      </div>
    </Layout>
  );
};

export default SignInUp;
