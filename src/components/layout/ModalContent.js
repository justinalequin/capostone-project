import React from "react";

function ModalContent() {
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
            type="text"
            placeholder="Please Enter First Name"
            style={{ borderRadius: "4px", marginTop: "0px" }}
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
            type="text"
            placeholder="Please Enter Last Name"
            style={{ borderRadius: "4px", marginTop: "0px" }}
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
            type="text"
            placeholder="Please Enter User Name"
            style={{ borderRadius: "4px", marginTop: "0px" }}
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
            type="text"
            placeholder="Please a Password"
            style={{ borderRadius: "4px", marginTop: "0px" }}
          ></input>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
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
