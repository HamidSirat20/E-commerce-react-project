import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import {
  addProductToCart,
  removeProductFromCart,
  toggleShoppingCart,
} from "../redux/reducers/cartReducer";

const Cart = () => {
  const toggle = useAppSelector((state) => state.cartReducer.cartIsVisible);
  const cartProducts = useAppSelector((state) => state.cartReducer.products);
  console.log(cartProducts)
  const dispatch = useAppDispatch();
  const handleCartToggle = () => {
    dispatch(toggleShoppingCart());
  };
  const increaseProduct = () => {
    dispatch(addProductToCart(cartProducts));
  };
  const decreaseProduct = () => {
    dispatch(removeProductFromCart(cartProducts));
  };
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
      <Typography>My Shopping Cart</Typography>
      <Stack>
        {cartProducts.map((product) => {
          return (
            <CardContent key={product.id}>

              <Typography
                gutterBottom
                variant="h5"
                textAlign="center"
                component="h5"
              >
                {product.title}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                textAlign="center"
                component="h5"
              >
                {product.description}
              </Typography>
              <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                <Button>£ {product.price}</Button>
                <Button onClick={increaseProduct} variant="outlined">
                 +
                </Button>
                <Button>{product.id}</Button>
                <Button onClick={decreaseProduct} variant="outlined">
                  -
                </Button>
              </CardActions>
            </CardContent>
          );
        })}
      </Stack>
    </Drawer>
  );
};

export default Cart;
