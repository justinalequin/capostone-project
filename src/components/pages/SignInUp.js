import React from "react";
import Layout from "../layout/Layout";

function SignInUp() {
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
              ></input>
            </div>
            <div style={{ margin: "5px" }}>
              <h4 style={{ marginBottom: "4px" }}>Password: </h4>
              <input
                type="text"
                placeholder="Please Enter Password"
                style={{ borderRadius: "4px" }}
              ></input>
            </div>
            <button
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

        <div style={{ marginTop: "16px" }}>
          <button style={{ borderRadius: "4px" }}>
            <h2>Sign me up!</h2>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default SignInUp;
