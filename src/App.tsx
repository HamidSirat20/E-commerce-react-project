// import React, { useEffect, useState } from "react";
// import TemplateCard from "./components/TemplateCard";
import { Container } from "@mui/material";
import TemplateCard from "./components/TemplateCard";
import RegisterUser from "./components/RegisterUser";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div>
      {/* <ProductWithLoading/> */}
      {/* <RegisterUser /> */}
      <NavBar/>
      <Container>
        <TemplateCard />
      </Container>
      <Cart/>
    </div>
  );
};

export default App;
