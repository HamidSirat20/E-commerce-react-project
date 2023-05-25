import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/reducers/usersReducer";
import { CreateNewUser } from "../types/User";
import useAppSelector from "../hooks/useAppSelector";

const CreateUser = () => {
  const dispatch = useDispatch();
  const { loading, error } = useAppSelector((state) => state.usersReducers);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: CreateNewUser = {
      email,
      password,
      name,
      avatar,
    };

    dispatch(createUser(newUser) as any).then(() => {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    });
  };

  return (
    <Box
      style={{ width: "20%", maxWidth: "1024px", margin: "0 auto" }}
      display="flex"
      flexDirection="column"
      maxWidth={400}
      alignItems="center"
      justifyContent="center"
      margin="auto"
      marginTop={5}
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
      <FormControl onSubmit={handleSubmit}>
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
          label="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          fullWidth
          margin="normal"
          type="text"
        />
        <Button type="submit" variant="contained" color="primary">
          Create User
        </Button>
      </FormControl>
      {loading && <CircularProgress />}
      {error && <Typography variant="body1">{error}</Typography>}
    </Box>
  );
};

export default CreateUser;
