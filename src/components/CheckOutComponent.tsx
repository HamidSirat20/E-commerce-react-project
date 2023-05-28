import React from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "./NavBar";

const OrderSuccessMessage = () => {
  return (
    <>
    <NavBar></NavBar>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h3" sx={{color:'green'}}>Order successfully checked out!</Typography>
    </Box></>
  );
};

export default OrderSuccessMessage;
