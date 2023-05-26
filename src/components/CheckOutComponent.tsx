import React from "react";
import { Box, Typography } from "@mui/material";

const OrderSuccessMessage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h3" sx={{color:'green'}}>Order successfully checked out!</Typography>
    </Box>
  );
};

export default OrderSuccessMessage;
