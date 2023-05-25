// import React, { useEffect, useState } from "react";
// import TemplateCard from "./components/TemplateCard";
import { Container, Stack } from "@mui/material";
import TemplateCard from "./components/TemplateCard";
import RegisterUser from "./components/RegisterUser";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import WelcomeSlider from "./components/WelcomeSlider";
import NavigateCategories from "./components/NavigateCategories";
import Main from "./components/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    children:[
      {
        path: "/",
        element:  <Container><Main></Main> </Container>
        ,
      },
      {
        path:'/Profile',
        element: <Stack margin='auto 0' marginTop={10}><RegisterUser></RegisterUser></Stack>
      },
      {
        path:"/products",
        element:<Container><TemplateCard></TemplateCard></Container>
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
