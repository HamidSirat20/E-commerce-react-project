import React from "react";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { toggleShoppingCart } from "../redux/reducers/cartReducer";

const NavBar = () => {
    const cartProduct = useAppSelector(state=>state.cartReducer.totalQuantity)
    const dispatch = useAppDispatch()
    const handleCartToggle = () =>{
        dispatch(toggleShoppingCart())
    }
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          PrimePicks
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Profile</Button>
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
  );
};

export default NavBar;
