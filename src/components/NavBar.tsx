import React from "react";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { toggleShoppingCart } from "../redux/reducers/cartReducer";
import { Link, NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    const cartProduct = useAppSelector(state=>state.cartReducer.totalQuantity)
    const dispatch = useAppDispatch()
    const handleCartToggle = () =>{
        dispatch(toggleShoppingCart())
    }
  return (
    <>
    <AppBar>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          PrimePicks
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavLink to='/'><Button color="inherit">Home</Button></NavLink>
          <NavLink to='/'><Button color="inherit">Products</Button></NavLink>
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
          }}>{cartProduct}</Typography>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
    <Outlet/>
    </>
  );
};

export default NavBar;
