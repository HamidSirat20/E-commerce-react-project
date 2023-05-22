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
import { createNewUser } from "../redux/reducers/usersReducer";
import useAppSelector from "../hooks/useAppSelector";
import { UpdateSingleProduct } from "../types/UpdateSingleProduct";
import { updateSingleProduct } from "../redux/reducers/productsReducer";

const RegisterUser = () => {
  const users = useAppSelector((state) => state.usersReducers);
  console.log(users);
  const dispatch = useAppDispatch();
  const addUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      createNewUser({
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
            Register
          </Typography>
          <TextField
            type="text"
            margin="dense"
            variant="outlined"
            label="Name"
            required
          />
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
          <TextField
            type="password"
            margin="normal"
            variant="outlined"
            label="Confirm Passoword"
            required
          />
          <Box>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{ textAlign: "center", paddingTop: "20px" }}
              >
                Choose Your Role:
              </FormLabel>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                aria-label="role-signup"
                name="admin"
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="admin"
                />
                <FormControlLabel
                  value="customer"
                  control={<Radio />}
                  label="customer"
                />
              </RadioGroup>
            </FormControl>
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

export default RegisterUser;

function useForm(): { register: any } {
  throw new Error("Function not implemented.");
}
