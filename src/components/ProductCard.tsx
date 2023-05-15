import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Product from "../types/Product";

const ProductCard = (props: Product) => {
  return (
    <Box
      width={"20rem"}
      margin={3}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <CardMedia
            sx={{ borderRadius: "10px 10px 0 0" }}
            component="img"
            height="250"
            image={props.images[1]}
            alt="product-image"
          />
        </CardContent>
        <CardActions>
          <Button>{props.price}</Button>
          <Button variant="contained">Add to Cart</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
