import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100vw",
        }}
      >
        <Header />
      </div>

      <div>{children}</div>

      <div
        style={{
          width: "100vw",
          position: "fixed",
          bottom: "0",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
