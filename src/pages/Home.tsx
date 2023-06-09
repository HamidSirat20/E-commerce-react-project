import React from "react";

import NavBar from "../components/NavBar";
import WelcomeSlider from "../components/WelcomeSlider";
import NavigateCategories from "../components/NavigateCategories";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import DrawerComponent from "./AdminDashboard";

const Home = () => {
  return (
    <>
      <WelcomeSlider />
      <NavigateCategories />
    </>
  );
};

export default Home;
