import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const HeaderFooter = () => {
  return (
    <>
      <NavBar />
      <Cart />
      <Footer />
    </>
  );
};

export default HeaderFooter;
