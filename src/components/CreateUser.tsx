import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

import { createUser, reset } from "../redux/reducers/usersReducer";
import { CreateNewUser } from "../types/User";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, users, currentUser, isSuccess } = useAppSelector(
    (state) => state.usersReducers
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("password does not match");
    } else {
      const newUser: CreateNewUser = {
        email,
        password,
        name,
        avatar,
      };
      dispatch(createUser(newUser) as any);
    }
  };
  useEffect(() => {
    if (error) {
      toast.error("Sign in unsuccessful");
    }
    if (isSuccess) {
      navigate("/");
      toast.success("Successfully Created an account");
    }
    dispatch(reset());
  }, [isSuccess]);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Box
          style={{ width: "25%", maxWidth: "1024px", margin: "0 auto" }}
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          marginTop={4}
          padding={2}
          borderRadius={4}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h6">Create User Account</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Confirm Password"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              fullWidth
              margin="normal"
              type="text"
            />
            <Button
              type="submit"
              onSubmit={handleSubmit}
              variant="contained"
              color="primary"
              sx={{ margin: "20" }}
            >
              Signin
            </Button>
          </form>
          {loading && <CircularProgress />}
          {error && <Typography variant="body1">{error}</Typography>}
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateUser;
