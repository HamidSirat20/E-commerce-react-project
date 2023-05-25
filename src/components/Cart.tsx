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
  Stack,
  Typography,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { isCartVisible } from "../redux/reducers/drawerReducer";
import { CartItem } from "../redux/reducers/cartReducer";
import Product from "../types/Product";

const Cart = () => {
  const toggle = useAppSelector((state) => state.drawerReducer.isCartVisible);
  const cartProducts = useAppSelector((state) => state.cartReducer.cartItems);
  const dispatch = useAppDispatch();
  const handleCartToggle = () => {
    dispatch(isCartVisible());
  };
  const handleRemoveFromCart = (cartItem:CartItem) =>{
    dispatch(removeFromCart(cartItem))
  }

  return (
    <Drawer
      open={toggle}
      anchor="right"
      PaperProps={{
        sx: {
          width: 400,
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
      <Typography textAlign='center' fontWeight='bold'>Your Shopping Cart</Typography>
      <Divider orientation="horizontal" />
      <Stack>
        <Grid>
          {cartProducts.map((product) => {
            return (
              <CardContent key={product.product.id} sx={{display:'flex'}}>
                <CardMedia
                  sx={{ borderRadius: "10px" }}
                  component="img"
                  height="100"
                  style={{ width: "100px" }}
                  image={product.product.images[0]}
                  alt="product-image"
                />
                <Box margin={1} textAlign="left" >
                  <Typography
                    fontSize="10"
                    component="h6"
                  >
                    {product.product.title}
                  </Typography>
                  <Typography
                    fontSize="8"
                    component="div"
                  >
                    Category: {product.product.category.name}
                  </Typography>
                  <Typography fontSize="bold">
                    Price: £ {product.product.price}
                  </Typography>
                  <Typography fontWeight='bold'> Total: {product.totalPrice}</Typography>
                  <Button onClick={() => handleRemoveFromCart(product)}>Remove Product</Button>
                </Box>
                <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                  <Button variant="outlined">+</Button>
                  <Typography>{product.quantity}</Typography>
                  <Button variant="outlined">-</Button>
                </CardActions>
              </CardContent>
            );
          })}
        </Grid>
      </Stack>
    </Drawer>
  );
};

export default Cart;
function removeFromCart(cartItem: CartItem): any {
  throw new Error("Function not implemented.");
}

