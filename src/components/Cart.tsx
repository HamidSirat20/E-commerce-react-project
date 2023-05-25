import React, { useState } from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { isCartVisible } from "../redux/reducers/drawerReducer";
import {
  CartItem,
  clearCart,
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from "../redux/reducers/cartReducer";
import Product from "../types/Product";

const Cart = () => {
  const toggle = useAppSelector((state) => state.drawerReducer.isCartVisible);
  const cartProducts = useAppSelector((state) => state.cartReducer.cartItems);
  const dispatch = useAppDispatch();
  const handleCartToggle = () => {
    dispatch(isCartVisible());
  };
  const handleRemoveFromCart = (cartItem: CartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleIncreaseAmount = (cartItem: CartItem) => {
    dispatch(increaseAmount(cartItem));
  };
  const handledeccreaseAmount = (cartItem: CartItem) => {
    dispatch(decreaseAmount(cartItem));
  };
  const clearAllProduct = () => {
    dispatch(clearCart());
  };
  const total = cartProducts.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.totalPrice;
  }, 0);
  return (
    <Drawer
      open={toggle}
      anchor="right"
      PaperProps={{
        sx: {
          width: 500,
        },
      }}
    >
      <ClearOutlinedIcon
        fontSize="large"
        onClick={handleCartToggle}
        sx={{
          ":hover": {
            color: "red",
            cursor: "pointer",
          },
        }}
      ></ClearOutlinedIcon>
      <Typography textAlign="center" fontWeight="bold">
        Your Shopping Cart
      </Typography>
      <Divider orientation="horizontal" />
      <Stack>
        <Grid>
          {cartProducts.map((product) => {
            return (
              <CardContent key={product.product.id} sx={{ display: "flex" }}>
                <CardMedia
                  sx={{ borderRadius: "10px" }}
                  component="img"
                  height="100"
                  style={{ width: "100px" }}
                  image={product.product.images[0]}
                  alt="product-image"
                />
                <Box margin={1} textAlign="left">
                  <Typography fontWeight='bold' fontSize="10" component="h6">
                    {product.product.title}
                  </Typography>
                  <Typography fontSize="6" component="div">
                    Category: {product.product.category.name}
                  </Typography>
                  <Typography fontSize="bold">
                    Price: £ {product.product.price}
                  </Typography>
                  <Typography fontWeight="bold">
                    {" "}
                    Subtotal: {product.totalPrice}
                  </Typography>
                  <Button variant="contained" onClick={() => handleRemoveFromCart(product)}>
                    Remove From Cart
                  </Button>
                </Box>
                <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                  <IconButton
                    onClick={() => {
                      handleIncreaseAmount(product);
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                  <Typography>{product.quantity}</Typography>
                  <IconButton
                    onClick={() => {
                      handledeccreaseAmount(product);
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </CardActions>
              </CardContent>
            );
          })}
        </Grid>
      </Stack>
      {cartProducts.length===0?<Box margin={2} textAlign='center'>Your Cart is Empty</Box>:<Button sx={{backgroundColor:'orange'}} variant="contained" fullWidth onClick={clearAllProduct}>Clear Cart</Button>}
      {cartProducts.length ===0?"":<Stack sx={{
        borderTop:'2px solid black',
        borderBottom:'2px solid black',
        margin:'20px'
      }}>
          <Typography variant="h5" fontWeight='bold' gutterBottom>Summary</Typography>
          <Typography variant="subtitle1" fontSize='8'>Estimated Cost Including Cargo and Tax</Typography>
          <Typography>Subtotal: £ {total}</Typography>
          <Typography>Shipment: £ {29}</Typography>
          <Typography>Tax: £ {total*0.1}</Typography>
          <Typography fontWeight='bold'>Order Total: £ {total+total*0.2+29}</Typography>
        </Stack>}
    </Drawer>
  );
};

export default Cart;
