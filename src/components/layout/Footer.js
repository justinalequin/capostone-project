import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ border: "solid white 1px", borderRadius: "2px" }}>
      <div
        style={{
          backgroundColor: "rgba(0, 40, 104, 1)",
          height: "5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "2px",
        }}
      >
        <Link to="/new-host" style={{ textDecoration: "none", color: "white" }}>
          <h3
            style={{
              border: "solid white 1px",
              width: "60vw",
            }}
          >
            ϟ Become A Host Today ϟ
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
