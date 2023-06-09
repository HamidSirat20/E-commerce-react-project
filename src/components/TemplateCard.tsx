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
import SortProducts from "./SortProducts";
import { fetchAllProducts, searchByCategories } from "../redux/reducers/productsReducer";
import Product from "../types/Product";
import useDebounce from "../hooks/useDebounce";
import { CartItem, addToCart } from "../redux/reducers/cartReducer";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

const filterProductByName = (product: Product[], search: string) => {
  return product.filter((item) => item.title.toLowerCase().includes(search));
};
const filterProductByCategory = (product: Product[], search: string) => {
  return product.filter((item) =>
    item.category.name.toLowerCase().includes(search)
  );
};

const TemplateCard = () => {
  const productList = useAppSelector((state) => state.productsReducer);
 const categoryId = useAppSelector(state=>state.productsReducer.category)
  const { loading, error } = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(20);
  const handleLoad = () => {
    setPage(page + 20);
  };
  useEffect(() => {
    dispatch(fetchAllProducts({ offset: 0, limit: page }));
    if(productList.category){
      dispatch(searchByCategories(categoryId))
    }
  }, [page,dispatch,categoryId]);
  const { onChangeFilter, filter, filteredProducts } = useDebounce<Product>(
    filterProductByName,
    productList.products
  );
  const handleAddToCart = (cartItem: CartItem) => {
    dispatch(addToCart(cartItem));
  };
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }
  return (
    <Container>
      <Box
        marginBottom={10}
        paddingTop={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "2rem",
            marginBottom: "3rem",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "stretch",
            },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              marginBottom: { xs: "1rem", md: 0 },
              width: { xs: "100%", md: "auto" },
            }}
          >
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
                minWidth: "30rem",
                maxWidth: "60rem",
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
          <Box>
            <SortProducts />
          </Box>
          <Box>
            <Dropdown />
          </Box>
        </Grid>
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
                    <Link to={`/${product.id}`}>
                      <CardMedia
                        sx={{ borderRadius: "10px 10px 0 0" }}
                        component="img"
                        height="250"
                        image={product.images[0]}
                        alt="product-image"
                      />
                    </Link>
                  </CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    textAlign="center"
                    component="h5"
                  >
                    {product.title}
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
        {loading ? (
          ""
        ) : (
          <Button
            sx={{ marginY: "2rem" }}
            fullWidth
            variant="contained"
            onClick={handleLoad}
          >
            Load More...
          </Button>
        )}
        <Cart />
      </Box>
    </Container>
  );
};

export default TemplateCard;
