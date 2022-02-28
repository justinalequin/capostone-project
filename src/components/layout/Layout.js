import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <div>
        <Header />
      </div>

      <div style={{ backgroundColor: "rgba(147, 108, 118, 1)" }}>
        {children}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
