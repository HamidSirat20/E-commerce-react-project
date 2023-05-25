import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import SortFilterProducts from "./SortProducts";
import { fetchAllProducts } from "../redux/reducers/productsReducer";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  FormControl,
  Grid,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import Product from "../types/Product";
import useDebounce from "../hooks/useDebounce";
import { CartItem, addToCart } from "../redux/reducers/cartReducer";

const filterProductByName = (product: Product[], search: string) => {
  return product.filter((item) => item.title.toLowerCase().includes(search));
};
const TemplateCard = () => {
  const productList = useAppSelector((state) => state.productsReducer);
  const { loading, error } = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(9);
  const handleLoad = () => {
    setPage(page + 9);
  };

  useEffect(() => {
    dispatch(fetchAllProducts({ offset: 0, limit: page }));
  }, [page]);
  const { onChangeFilter, filter, filteredProducts } = useDebounce<Product>(
    filterProductByName,
    productList.products
  );
  const handleAddToCart = (cartItem: CartItem) => {
    dispatch(addToCart(cartItem));
  };
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }
  return (
    <Box paddingTop={10}>
      <Box sx={{ display: "flex", padding: "1rem" }}>
        <SortFilterProducts />
        <TextField
          inputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon /> this text is here
              </InputAdornment>
            ),
          }}
          onChange={onChangeFilter}
          sx={{
            width: "40rem",
            borderRadius: "5",
            "& input": {
              textAlign: "center",
            },
          }}
          type="text"
          placeholder="Search"
          size="small"
          variant="outlined"
          value={filter}
        />
      </Box>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => {
          return (
            <Grid
              key={product.id}
              item
              xs={12}
              sm={4}
              md={3}
              margin={3}
              spacing={3}
              sx={{
                ":hover": {
                  boxShadow: "10px 10px 10px 10px #ccc",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                },
              }}
            >
              <FormControl component="form">
                <CardContent>
                  <CardMedia
                    sx={{ borderRadius: "10px 10px 0 0" }}
                    component="img"
                    height="250"
                    image={product.images[1]}
                    alt="product-image"
                  />
                </CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  textAlign="center"
                  component="h5"
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  color="text.secondary"
                >
                  {product.description}
                </Typography>
                <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                  <Button>£ {product.price}</Button>
                  <Button
                    onClick={() =>
                      handleAddToCart({
                        product,
                        quantity: 1,
                        totalPrice: product.price,
                      })
                    }
                    variant="outlined"
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </FormControl>
            </Grid>
          );
        })}
      </Grid>
      <Button
        sx={{ marginY: "4rem" }}
        fullWidth
        variant="contained"
        onClick={handleLoad}
      >
        Load More...
      </Button>
      {loading && <CircularProgress />}
      {error && <Typography variant="body1">{error}</Typography>}
    </Box>
  );
};

export default TemplateCard;
