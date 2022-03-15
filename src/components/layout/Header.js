import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user);

  const Greeting = () => {
    var myDate = new Date();
    var hours = myDate.getHours();
    var greet;

    if (hours < 12) greet = "morning";
    else if (hours >= 12 && hours <= 17) greet = "afternoon";
    else if (hours >= 17 && hours <= 24) greet = "evening";

    return <span>Good {greet}</span>;
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(0, 40, 104, 1)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "8vh",
          border: "solid lightgray 1px",
          borderRadius: "4px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        {user ? (
          <Link to="/action-page">
            <img src={logo} style={{ height: "5vh" }}></img>
          </Link>
        ) : (
          <Link to="/">
            <img src={logo} style={{ height: "5vh" }}></img>
          </Link>
        )}

        {/* <Link to="/">
          <img src={logo} style={{ height: "5vh" }}></img>
        </Link> */}

        <Link
          to="/sign-in-up"
          style={{ color: "white", textDecoration: "none" }}
        >
          {user ? (
            <h4 style={{ border: "solid white 2px", padding: "4px" }}>
              {Greeting()} {user.firstName}!
            </h4>
          ) : (
            <div>
              <h4 style={{ border: "solid white 2px", padding: "4px" }}>
                Login / Sign up
              </h4>
            </div>
          )}
        </Link>

        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          <div>
            <img src={cart} style={{ height: "4vh" }}></img>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
