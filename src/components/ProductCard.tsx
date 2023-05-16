import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Product from "../types/Product";

const ProductCard = (props: Product) => {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      margin={3}
      spacing={3}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 10px 10px #ccc",alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center'
        },
      }}
    >
      <CardContent>
        <CardMedia
          sx={{ borderRadius: "10px 10px 0 0"}}
          component="img"
          height="250"
          image={props.images[2]}
          alt="product-image"
        />
      </CardContent>
      <Typography gutterBottom variant="h5" textAlign='center' component="h5">
          {props.title}
        </Typography>
        <Typography variant="subtitle2" textAlign='center' color="text.secondary">
          {props.description}
        </Typography>
      <CardActions sx={{display:'flex',flexDirection:'column'}}>
        <Button>£ {props.price}</Button>
        <Button variant="contained">Add to Cart</Button>
      </CardActions>
    </Grid>
  );
};

export default ProductCard;
