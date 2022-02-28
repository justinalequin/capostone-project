import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div style={{ backgroundColor: "rgba(108, 147, 137, 1)" }}>
        <Link to="/">
          <div>LOGO</div>
        </Link>

        <Link to="/signinup">
          <div>Log in/ Sign up</div>
        </Link>

        <Link to="/actionpage">
          <div>Action Page</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
