import React from "react";
import HeaderTop from "./HeaderTop";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
