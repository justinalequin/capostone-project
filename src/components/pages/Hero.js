import React from "react";
import "./Hero.css";
import Layout from "../layout/Layout";

function Hero() {
  return (
    <Layout>
      <div
        style={{
          backgroundImage:
            "url(https://i.insider.com/611a2dc33dd01000199dcb20?width=1136&format=jpeg)",
          height: "25vh",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "relative",
          marginBottom: "22px",
          marginTop: "88px",
        }}
      >
        <div>
          <h1
            class="mainTitle"
            style={{ color: "white", fontFamily: "sans-serif" }}
          >
            TBEV RENTALS
          </h1>
          <button
            style={{
              backgroundColor: "rgba(0, 40, 104, .5)",
              position: "absolute",
              bottom: "12px",
              left: "12px",
              borderRadius: "4px",
              padding: "2px",
              color: "white",
            }}
          >
            <h2>SIGN UP NOW</h2>
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgba(0, 40, 104, 1)",
          color: "white",
          paddingTop: "1px",
          paddingBottom: "1px",
          marginBottom: "22px",
          borderRadius: "2px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            backgroundColor: "rgba(150, 150 , 150, .5)",
            fontFamily: "sans-serif",
            width: "95vw",
            borderRadius: "2px",
          }}
        >
          Tampa's premier Electric and Exotic vehicle rental platform.
        </h2>
      </div>

      <div
        style={{
          backgroundColor: "rgba(126, 129, 128, .5)",
          width: "80vw",
          margin: "auto",
          padding: "12px",
          textAlign: "center",
          borderRadius: "2px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <h3>How does it work?</h3>
        <div
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            listSyle: "inside",
            border: "solid lightgray 1px",
            borderRadius: "2px",
            backgroundColor: "rgba(250, 250, 250, .5)",
          }}
        >
          <p>1. Create an account</p>
          <p>2. Select a vehicle</p>
          <p>3. Check availability</p>
          <p>4. Confirm your dates</p>
          <p>5. Enjoy your EV experience!</p>
        </div>
      </div>

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
            backgroundColor: "rgba(0, 40, 104, 1)",
            color: "white",
            width: "100vw",
            marginTop: "22px",
            marginBottom: "22px",
            borderRadius: "2px",
            padding: "4px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              backgroundColor: "rgba(150, 150 , 150, .5)",
              fontFamily: "sans-serif",
              width: "95vw",
              borderRadius: "2px",
            }}
          >
            Testimonials
          </h2>
        </div>
        <div style={{ marginBottom: "66px", width: "95vw" }}>
          <div
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              listSyle: "inside",
              border: "solid white 1px",
              backgroundColor: "rgba(126, 129, 128, .5)",
              width: "66vw",
              borderRadius: "8px",
              marginBottom: "12px",
              height: "12vh",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <h4 style={{ marginBottom: "2px" }}>Justin A. -</h4>
            <div style={{ backgroundColor: "rgba(250, 250, 250, .5)" }}>
              <p>"I think it's great."</p>
            </div>
          </div>

          <div
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              listSyle: "inside",
              border: "solid white 1px",
              backgroundColor: "rgba(126, 129, 128, .5)",
              width: "66vw",
              borderRadius: "8px",
              marginBottom: "12px",
              height: "12vh",
              marginLeft: "auto",
              marginRight: "0",

              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <h4 style={{ marginBottom: "2px" }}>Ashley M. -</h4>
            <div style={{ backgroundColor: "rgba(250, 250, 250, .5)" }}>
              <p>"Easiest renting experience ever!"</p>
            </div>
          </div>

          <div
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              listSyle: "inside",
              border: "solid white 1px",
              backgroundColor: "rgba(126, 129, 128, .5)",
              width: "66vw",
              borderRadius: "8px",
              marginBottom: "4px",
              height: "12vh",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <h4 style={{ marginBottom: "2px" }}>Christian M. -</h4>
            <div
              style={{
                backgroundColor: "rgba(250, 250, 250, .5)",
                width: "auto",
              }}
            >
              <p>"He paid me for this."</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Hero;
