import React from "react";
import { Box, Button, Typography } from "@mui/material";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

const LogoutMessage = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem('token', '');
    navigate('/');
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h3" color="green">
        You have successfully logged out.
      </Typography>
      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </Box>
  );
};

export default LogoutMessage;
