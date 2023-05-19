// import React, { useEffect, useState } from "react";
// import TemplateCard from "./components/TemplateCard";
import { Container } from "@mui/material";
import TemplateCard from "./components/TemplateCard";
import RegisterUser from "./components/RegisterUser";
const App = () => {
  return (
    <div>
      {/* <ProductWithLoading/> */}
      {/* <RegisterUser /> */}
      <Container>
        <TemplateCard />
      </Container>
    </div>
  );
};

export default App;
