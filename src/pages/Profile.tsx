import React, { useEffect } from "react";

import useAppSelector from "../hooks/useAppSelector";
import NavBar from "../components/NavBar";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";

const Profile = () => {
  const currentUser = useAppSelector(
    (state) => state.usersReducers.currentUser
  );

  return (
    <>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Your Profile
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome:{currentUser?.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {currentUser?.email}
        </Typography>
        <img width={320} height={320} src={currentUser?.avatar} alt="avatar" />
      </Box>
    </>
  );
};

export default Profile;
