import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import useAppDispatch from "../hooks/useAppDispatch";
import { createNewUsers } from "../redux/reducers/usersReducer";
import useAppSelector from "../hooks/useAppSelector";
import { UpdateSingleProduct } from "../types/UpdateSingleProduct";
import { updateSingleProduct } from "../redux/reducers/productsReducer";

const LogIn = () => {
const Login = {
    email:'',
    password:'',
    image:'n'
}
  const users = useAppSelector((state) => state.usersReducers);
  const dispatch = useAppDispatch();
  const addUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      createNewUsers({
        id: 1,
        email: "hamid@gmail.com",
        password: "string",
        name: "hamid",
        role: "admin",
      })
    );
  };
  return (
      <FormControl>
        <Box
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
          <Typography variant="h4" padding={3} textAlign="center">
            Login
          </Typography>
          <TextField
            type="email"
            margin="dense"
            variant="outlined"
            label="Email"
            required
          />
          <TextField
            type="password"
            margin="dense"
            variant="outlined"
            label="Password"
            required
          />
          <Box>
          </Box>
          <Box>
            <FormControlLabel
              required
              label="I accept the terms and conditions"
              control={<Checkbox />}
            ></FormControlLabel>
          </Box>
          <Button
            onClick={addUser}
            sx={{ margin: "20px", borderRadius: "5px" }}
            variant="contained"
            color="warning"
          >
            SIGNUP
          </Button>
        </Box>
      </FormControl>
  );
};

export default LogIn;


