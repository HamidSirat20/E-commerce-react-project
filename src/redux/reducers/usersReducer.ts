import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isAction,
} from "@reduxjs/toolkit";
import User from "../../types/User";
import axios, { AxiosError } from "axios";

interface UserReducer {
  users: User[];
  currentUser?: User;
  loading: true;
  error: string;
}
const initialUsers: UserReducer = {
  users: [],
  loading: true,
  error: "",
};
export const logIn = createAsyncThunk(
  "login",
  async ({ email, password }: UserLogin) => {
    try {
      const result = await axios.post<{ login_token: string }>(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password }
      );
      const authentication = await axios.get<User>(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${result.data.login_token}`,
          },
        }
      );
      return authentication.data;
    } catch (e) {
      const err = e as AxiosError;
      return err.message;
    }
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  reducers: {
    createNewUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (build) => {
    build.addCase(logIn.fulfilled, (state, action) => {
      if (action.payload instanceof AxiosError) {
        state.error = action.payload.message;
      }else {
        // state.currentUser = action.payload
      }
      state.loading = true;
    });
  },
});

const usersReducers = usersSlice.reducer;
export const { createNewUser } = usersSlice.actions;
export default usersReducers;
