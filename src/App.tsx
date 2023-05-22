// import React, { useEffect, useState } from "react";
// import TemplateCard from "./components/TemplateCard";
import { Container, Stack } from "@mui/material";
import TemplateCard from "./components/TemplateCard";
import RegisterUser from "./components/RegisterUser";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductCard from "./components/ProductCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    children:[
      {
        path: "/",
        element:  <Container><TemplateCard /> <Cart/></Container>
        ,
      },
      {
        path:'/Profile',
        element: <Stack margin='auto 0' marginTop={10}><RegisterUser/></Stack>
      }
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
    // <div>
    //   {/* <ProductWithLoading/>  */}
    //   {/* {<RegisterUser /> } */}
    //   <NavBar/>
    //   <Container>
    //     <TemplateCard />
    //   </Container>
    //   <Cart/>
    // </div>
  );
};

export default App;
