import { Box, Grid, FormControl, Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import { login } from "../redux/reducers/usersReducer";

const TestLogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.usersReducers.currentUser);
  const loading = useAppSelector((state) => state.usersReducers.loading);
  const error = useAppSelector((state) => state.usersReducers.error);
console.log(email,password)
  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  if (currentUser) {
    return <Box>Welcome, {currentUser.name}</Box>;
  }

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
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <FormControl>
            <Box
              maxWidth={400}
              padding={2}
              borderRadius={4}
              boxShadow={"5px 5px 10px #ccc"}
              sx={{
                ":hover": {
                  boxShadow: "10px 10px 20px #ccc",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h4" padding={3} textAlign="center">
                  Login
                </Typography>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  margin="dense"
                  variant="outlined"
                  label="Email"
                  required
                />
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  margin="dense"
                  variant="outlined"
                  label="Password"
                  required
                />
                <Button
                  onClick={handleLogin}
                  sx={{ margin: "20px", borderRadius: "5px" }}
                  variant="contained"
                  color="warning"
                >
                  SIGNUP
                </Button>
              </Box>
            </Box>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TestLogIn;
