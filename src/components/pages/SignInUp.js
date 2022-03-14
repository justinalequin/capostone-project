import React, { useState } from "react";
import Layout from "../layout/Layout";
import Modal from "../layout/Modal";
import axiosRequest from "../../axiosRequest";
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

    axiosRequest
      .post("/sign-in", {
        userCredentials: signInForm,
      })
      .then((response) => {
        console.log("response: ", response.data);
        dispatch({
          type: SIGN_IN_ACTION,
          payload: {
            userData: response.data.user,
          },
        });
      });
  };

  const handleSignOut = () => {
    axiosRequest
      .get("/sign-out")
      .then(() => {
        dispatch({ type: SIGN_OUT_ACTION });
      })
      .catch((error) => console.log("There was a problem signing out"));
  };

  if (user) {
    console.log(user);
    console.log(user.firstName);
    return (
      <Layout>
        <div style={{ marginTop: "88px" }}>
          <h1>Hi, {user.firstName}</h1>

          <div
            style={{
              backgroundColor: "lightgray",
              padding: "12px",
              width: "66vw",
              margin: "auto",
              borderRadius: "2px",
              paddingBottom: "32px",
            }}
          >
            <h4>Your Dashboard</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  Find a Vehicle
                </button>
              </Link>

              <Link to="/user-rentals">
                <button
                  style={{
                    backgroundColor: "rgba(0, 40, 104, 1)",
                    borderRadius: "4px",
                    width: "44vw",
                    color: "white",
                    margin: "4px",
                  }}
                >
                  My Rentals
                </button>
              </Link>

              <Link to="/new-host">
                <button
                  style={{
                    backgroundColor: "rgba(0, 40, 104, 1)",
                    borderRadius: "4px",
                    width: "44vw",
                    color: "white",
                    margin: "4px",
                  }}
                >
                  Host Your Vehicle
                </button>
              </Link>

              <button
                onClick={handleSignOut}
                style={{
                  backgroundColor: "rgba(0, 40, 104, 1)",
                  borderRadius: "4px",
                  width: "44vw",
                  color: "white",
                  margin: "4px",
                }}
              >
                Sign Out
              </button>
            </div>
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
