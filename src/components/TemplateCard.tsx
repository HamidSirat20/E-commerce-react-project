import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import SortFilterProducts from "./SortProducts";
import { fetchAllProducts } from "../redux/reducers/productsReducer";
import Product from "../types/Product";
import useDebounce from "../hooks/useDebounce";
import { CartItem, addToCart } from "../redux/reducers/cartReducer";
import Cart from "./Cart";
import { ToastContainer } from "react-toastify";

const filterProductByName = (product: Product[], search: string) => {
  return product.filter((item) => item.title.toLowerCase().includes(search));
};

const TemplateCard = () => {
  const productList = useAppSelector((state) => state.productsReducer);
  const { loading, error } = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(20);
  const handleLoad = () => {
    setPage(page + 10);
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
    <Container>
      <Box paddingTop={10} display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" alignItems="center" paddingBottom={2}>
          <SortFilterProducts />
          <TextField
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={onChangeFilter}
            sx={{
              width: "100%",
              maxWidth: "40rem",
              borderRadius: "5px",
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
                sm={6}
                md={4}
                lg={3}
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
                  <CardActions
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
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
          sx={{ marginY: "2rem" }}
          fullWidth
          variant="contained"
          onClick={handleLoad}
        >
          Load More...
        </Button>
        <Cart />
        <ToastContainer />
      </Box>
    </Container>
  );
};

export default TemplateCard;
