import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import { login, reset } from "../redux/reducers/usersReducer";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error, currentUser, isSuccess } = useAppSelector(
    (state) => state.usersReducers
  );
  useEffect(() => {
    if (error) {
      toast.error("An error occurred");
    }
    if (isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [dispatch, error, isSuccess, navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      toast("Empty email or password");
    } else {
      dispatch(login({ email, password }));
    }
  };

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
              <form onSubmit={handleSubmit}>
                <FormControl>
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
                    sx={{ margin: "20px", borderRadius: "5px" }}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Sign In
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signin;
