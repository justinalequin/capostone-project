import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Header() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(0, 40, 104, 1)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "8vh",
        }}
      >
        <Link to="/">
          <img src={logo} style={{ height: "5vh" }}></img>
        </Link>

        <Link to="/signinup" style={{ color: "white", textDecoration: "none" }}>
          <div>
            <h4>Log in/ Sign up</h4>
          </div>
        </Link>

        <Link
          to="/actionpage"
          style={{ color: "white", textDecoration: "none" }}
        >
          <div>
            <h4>Action Page</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
