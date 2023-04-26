import React from "react";
import Header from "./Header";
const Layout = (props) => {
  return (
    <>
      <Header />
      {props.chiltren}
    </>
  );
};

export default Layout;
