import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGN_IN_ACTION } from "../../reduxStore/userState";

function ModalContent() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const user = useSelector((state) => state.user);

  if (user) {
    navigate("/action-page");
  }

  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });

  const onSubmit = () => {
    console.log("signUpForm: ", signUpForm);

    axios
      .post("http://localhost:5100/create-user", { user: signUpForm })
      .then((response) => {
        console.log("user route was hit successfully!, response: ", response);

        const createdUserData = response.data;
        dispatch({
          type: SIGN_IN_ACTION,
          payload: {
            userData: createdUserData,
          },
        });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ marginBottom: "2px" }}>SIGN UP</h1>
        <p>Please fill out the form below.</p>
        <hr style={{ width: "70vw", marginTop: "2px" }}></hr>
      </div>

      <div style={{}}>
        <div
          style={{
            backgroundColor: "lightgray",
            paddingBottom: "2px",
            width: "75vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "4px",
            height: "7vh",
          }}
        >
          <h5 style={{ marginBottom: "2px" }}>First Name:</h5>
          <input
            type="string"
            placeholder="Please Enter First Name"
            style={{ borderRadius: "4px", marginTop: "0px" }}
            value={signUpForm.firstName}
            onChange={(event) => {
              setSignUpForm({ ...signUpForm, firstName: event.target.value });
            }}
          ></input>
        </div>

        <div
          style={{
            backgroundColor: "lightgray",
            paddingBottom: "2px",
            width: "75vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "4px",
            height: "7vh",
          }}
        >
          <h5 style={{ marginBottom: "2px" }}>Last Name:</h5>
          <input
            type="string"
            placeholder="Please Enter Last Name"
            style={{ borderRadius: "4px", marginTop: "0px" }}
            value={signUpForm.lastName}
            onChange={(event) => {
              setSignUpForm({ ...signUpForm, lastName: event.target.value });
            }}
          ></input>
        </div>

        <div
          style={{
            backgroundColor: "lightgray",
            paddingBottom: "2px",
            width: "75vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "4px",
            height: "7vh",
          }}
        >
          <h5 style={{ marginBottom: "2px" }}>User Name:</h5>
          <input
            type="string"
            placeholder="Please Enter User Name"
            style={{ borderRadius: "4px", marginTop: "0px" }}
            value={signUpForm.userName}
            onChange={(event) => {
              setSignUpForm({ ...signUpForm, userName: event.target.value });
            }}
          ></input>
        </div>

        <div
          style={{
            backgroundColor: "lightgray",
            paddingBottom: "2px",
            width: "75vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "2px",
            height: "7vh",
          }}
        >
          <h5 style={{ marginBottom: "2px" }}>Password:</h5>
          <input
            type="password"
            placeholder="Please a Password"
            style={{ borderRadius: "4px", marginTop: "0px" }}
            value={signUpForm.password}
            onChange={(event) => {
              setSignUpForm({ ...signUpForm, password: event.target.value });
            }}
          ></input>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={onSubmit}
            style={{
              marginTop: "22px",
              backgroundColor: "rgba(0, 40, 104, 1)",
              borderRadius: "4px",
              width: "44vw",
              height: "5vh",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
