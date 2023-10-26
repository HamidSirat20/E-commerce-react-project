import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

import { createUser, reset } from "../redux/reducers/usersReducer";
import { CreateNewUser } from "../types/User";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, users, currentUser, isSuccess } = useAppSelector(
    (state) => state.usersReducers
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
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

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
          <Typography variant="h4" marginBottom={3}>
            Singup
          </Typography>
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
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Password"
              variant="outlined"
              type={showPassword2 ? "text" : "password"}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility2}
                      edge="end"
                    >
                      {showPassword2 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              fullWidth
              style={{ marginTop: 20 }}
            >
              Signin
            </Button>
          </form>
          {loading && <CircularProgress />}
          {error && <Typography variant="body1">{error}</Typography>}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signup;
