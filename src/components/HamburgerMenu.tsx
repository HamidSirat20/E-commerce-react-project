import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logout, reset } from "../redux/reducers/usersReducer";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";

const MyNavigation = () => {
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.usersReducers);
  const dispatch = useAppDispatch();
  const logout = () => {
    localStorage.setItem('token', '');
    navigate('/');
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
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {currentUser ? (
          <MenuItem onClick={logout}>
            <NavLink to="/logout">
              <Button color="inherit">Logout</Button>
            </NavLink>
          </MenuItem>
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

export default MyNavigation;
