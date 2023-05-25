import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import User, { CreateNewUser, UpdateNewUser } from "../../types/User";
import axios, { AxiosError } from "axios";
import { UserLogin } from "../../types/UserLogin";

interface UserReducer {
  users: User[];
  currentUser?: User;
  loading: boolean;
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
export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async () => {
    try {
      const fetchUsers = axios.get<User[]>(
        `https://api.escuelajs.co/api/v1/users`
      );
      return (await fetchUsers).data;
    } catch (e) {
      const error = e as AxiosError;
      return error.message;
    }
  });
  export const createUser = createAsyncThunk(
    "createNewUser",
    async (product: CreateNewUser) => {
      try {
        const result = await axios.post(
          "https://api.escuelajs.co/api/v1/users/",
          product
        );
        return result.data;
      } catch (e) {
        const error = e as AxiosError;
        return error.message;
      }
    }
  );
  export const updateSingleUser = createAsyncThunk(
    "updateSingleUser",
    async (updateProduct: UpdateNewUser) => {
      const { id, update } = updateProduct;
      try {
        const result = await axios.put(
          `https://api.escuelajs.co/api/v1/users/${id}`,
          update
        );
        return result.data;
      } catch (e) {
        const error = e as AxiosError;
        return error.message;
      }
    }
  );
const usersSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  reducers: {
    createNewUsers: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (build) => {
    build
    .addCase(logIn.fulfilled, (state, action) => {
      if (action.payload instanceof AxiosError) {
        state.error = action.payload.message;
      } else {
        // state.currentUser=action.payload
      }
      state.loading = true;
    })
    .addCase(getAllUsers.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = "Cannot fetch this time, try later";
    })
    .addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      } else {
        state.users = action.payload;
      }
    })
    .addCase(createUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(createUser.rejected, (state) => {
      state.loading = false;
      state.error = "Cannot create new product, try later";
    })
    .addCase(createUser.fulfilled, (state, action:PayloadAction<User>) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      } else {
        state.users.push(action.payload);
      }
    })
    .addCase(updateSingleUser.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(updateSingleUser.rejected, (state, action) => {
      state.loading = false;
      state.error = "Cannot update the product now, try later";
    })
    .addCase(updateSingleUser.fulfilled, (state, action) => {
      state.loading=false
      state.users.map((user) => {
        if (user.id === parseInt(action.payload.id)) {
            return action.payload
        }
        return user
    })
    })
  },

});

const usersReducers = usersSlice.reducer;
export const { createNewUsers } = usersSlice.actions;
export default usersReducers;
