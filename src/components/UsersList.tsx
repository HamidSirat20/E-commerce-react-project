import React, { useEffect } from "react";
import { CircularProgress, List, ListItem, ListItemText, Typography } from "@mui/material";

import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import { getAllUsers } from "../redux/reducers/usersReducer";

const UsersList = () => {
  const dispatch = useAppDispatch()
  const { loading, error, users } = useAppSelector(
    (state) => state.usersReducers
  );
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }
  return (
    <div>
      <Typography variant="h4">User List</Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} sx={{border:'1 solid black'}}>
            <ListItemText primary={user.id} />
            <ListItemText primary={user.name} />
            <ListItemText primary={user.email} />
            <ListItemText primary={user.password} />
            <ListItemText primary={user.role} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UsersList;
