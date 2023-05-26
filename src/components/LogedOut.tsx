import React from "react";
import { Box, Typography } from "@mui/material";

const LogoutMessage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h3" color='green'>You have successfully logged out.</Typography>
    </Box>
  );
};

export default LogoutMessage;
