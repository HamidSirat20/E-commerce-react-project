import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { logout, reset } from "../redux/reducers/usersReducer";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import PersonIcon from "@mui/icons-material/Person";
import { Logout } from "@mui/icons-material";

const Account = () => {
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.usersReducers);

  const profileAvatarFirst = currentUser?.name?.[0]?.toLocaleUpperCase() || "";

  const dispatch = useAppDispatch();
  const LogoutUser = () => {
    dispatch(logout());
    navigate("/");
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event: any) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
      >
        {currentUser ? (
          <Avatar sx={{ width: 32, height: 32 }}>{profileAvatarFirst}</Avatar>
        ) : (
          <Avatar sx={{ width: 32, height: 32 }}></Avatar>
        )}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {currentUser ? (
          <>
            <MenuItem
              onClick={LogoutUser}
              style={{ display: "flex", alignItems: "center" }}
            >
              <NavLink
                to="/logout"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Logout fontSize="small" style={{ marginRight: "5px" }} />{" "}
                Logout
              </NavLink>
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              style={{ display: "flex", alignItems: "center" }}
            >
              <NavLink
                to="/profile"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PersonIcon style={{ marginRight: "5px" }} /> Profile
              </NavLink>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleMenuClose}>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button color="inherit">Log In</Button>
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink to="/signup" style={{ textDecoration: "none" }}>
                <Button color="inherit">Sign Up</Button>
              </NavLink>
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default Account;
