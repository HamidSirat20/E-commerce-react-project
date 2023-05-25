import React, { useState } from "react";
import { Box, Button, CircularProgress, FormControl, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useAppSelector from "../hooks/useAppSelector";
import { UpdateNewUser } from "../types/User";
import { updateSingleUser } from "../redux/reducers/usersReducer";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const { loading, error } = useAppSelector((state) => state.usersReducers);
  const [userId, setUserId] = useState<number>(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updateUser: UpdateNewUser = {
      id: userId,
      update: {
        email,
        password,
        name,
        avatar,
      },
    };
    dispatch(updateSingleUser(updateUser) as any).then(() => {
      setUserId(0);
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    });
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }
  return (
    <Box
      style={{ width: "20%", margin: "0 auto" }}
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
      <Typography variant="h6">Update User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="User ID"
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
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
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Update User
        </Button>
      </form>
    </Box>
  );
};

export default UpdateUser;
