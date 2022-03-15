import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import axiosRequest from "../../axiosRequest";
import { useSelector } from "react-redux";
function UserRentals() {
  const [userRentals, setUserRetnals] = useState();
  const user = useSelector((state) => state.user);
  console.log(user.id);
  console.log(userRentals);

  useEffect(() => {
    axiosRequest
      .get("/get-orders")
      .then((response) => setUserRetnals(response.data));
    console.log(userRentals);
  }, []);

  if (!userRentals || userRentals.length === 0) {
    return (
      <Layout>
        <div style={{ marginTop: "88px" }}>
          <h1>My Rentals</h1>
          <p>Nothing to display yet..</p>
        </div>
      </Layout>
    );
  }
  if (userRentals) {
    const cleanedUserRentals = userRentals[0];

    return (
      <Layout>
        <div style={{ marginTop: "88px" }}>
          <h1>My Rentals</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: " rgba(0, 40, 104, 1)",
                width: "80vw",
                height: "40vh",
                color: "white",
                border: "solid lightgray 2px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h2>{cleanedUserRentals.brand}</h2>
                <h2>{cleanedUserRentals.title}</h2>
              </div>
              <div>
                <img
                  src={cleanedUserRentals.image}
                  style={{ height: "15vh" }}
                ></img>
              </div>
              <div
                style={{
                  backgroundColor: "lightgray",
                  border: "solid 1px white",
                }}
              >
                <h3 style={{ textShadow: "1px 1px black" }}>
                  Total Price: ${cleanedUserRentals.price / 100}
                </h3>
              </div>
              <div>
                <h4>Day/s: </h4>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                backgroundColor: " rgba(0, 40, 104, .5)",
                marginTop: "44px",
                color: "white",
                border: "solid lightgray 2px",
              }}
            >
              <h5>
                To manage your reservations further, please contact support.
              </h5>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default UserRentals;
