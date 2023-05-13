import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "../../types/User";

const initialUsers: User[]= []

const usersSlice = createSlice({
    name:'users',
    initialState: initialUsers,
    reducers:{
        createNewUser:(state,action:PayloadAction<User>) => {
            state.push(action.payload)
        }
    }
})


const usersReducers = usersSlice.reducer
export const {createNewUser} = usersSlice.actions
export default usersReducers