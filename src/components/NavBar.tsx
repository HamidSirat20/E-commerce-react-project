import React from "react";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { Link, NavLink, Outlet } from "react-router-dom";
import { isCartVisible } from "../redux/reducers/drawerReducer";

const NavBar = () => {
  const toggle = useAppSelector(state=>state.drawerReducer.isCartVisible)
    const cartProduct = useAppSelector(state=>state.cartReducer)
    const dispatch = useAppDispatch()
    const handleCartToggle = () => {
      dispatch(isCartVisible())
    };

  return (
    <>
    <AppBar>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          PrimePicks
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavLink to='/'><Button color="inherit">Home</Button></NavLink>
          <NavLink to='/products'><Button color="inherit">Products</Button></NavLink>
          <NavLink to='/Profile'><Button color="inherit">Profile</Button></NavLink>
          <IconButton onClick={handleCartToggle}>
            <ShoppingCartIcon
              fontSize="large"
              color="inherit"
              aria-aria-label="shopping-cart"
            >
            </ShoppingCartIcon>
            <Typography sx={{
            background:'orange',borderRadius:'50%',
            width:'40px',
          }}></Typography>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
    <Outlet/>
    </>
  );
};

export default NavBar;
