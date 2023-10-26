import { useEffect, useState } from "react";
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
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import SortProducts from "./SortProducts";
import { fetchAllProducts } from "../redux/reducers/productsReducer";
import Product from "../types/Product";
import useDebounce from "../hooks/useDebounce";
import { CartItem, addToCart } from "../redux/reducers/cartReducer";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import {
  fetchAllCategories,
  fetchCatProducts,
} from "../redux/reducers/categoryReducer";

const filterProductByName = (product: Product[], search: string) => {
  return product.filter((item) => item.title.toLowerCase().includes(search));
};

const ProductLists = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state) => state.productsReducer);
  const { loading, error } = useAppSelector((state) => state.productsReducer);

  const [categoryId, setCategoryId] = useState("");
  const categories = useAppSelector(
    (state) => state.categoryReducer.categories
  );
  if (categoryId) {
    console.log("cat id " + categoryId);
  }

  const categoryProducts = useAppSelector(
    (state) => state.categoryReducer.categoryProducts || []
  );

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchCatProducts(Number(categoryId)));
  }, [categoryId, dispatch]);

  const [page, setPage] = useState<number>(20);
  const handleLoad = () => {
    setPage(page + 20);
  };

  useEffect(() => {
    dispatch(fetchAllProducts({ offset: 0, limit: page }));
  }, [page, dispatch]);

  const { onChangeFilter, filter, filteredProducts } = useDebounce<Product>(
    filterProductByName,
    productList.products
  );

  const handleAddToCart = (cartItem: CartItem) => {
    dispatch(addToCart(cartItem));
  };

  if (loading) {
    return (
      <Stack
        sx={{ color: "grey.500" }}
        spacing={3}
        direction="row"
        justifyContent="center"
        height="100vh"
      >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    );
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }

  return (
    <Container>
      <Box
        marginTop={5}
        marginBottom={5.5}
        paddingTop={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            marginBottom: { xs: "2rem", md: "3rem" },
          }}
        >
          <Grid item xs={12} md={6}>
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
                minWidth: "16rem",
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              maxWidth="16rem"
            >
              <Select
                sx={{
                  width: "100%",
                  minWidth: "7rem",
                  maxWidth: "10rem",
                  borderRadius: "5px",
                  marginRight: "1rem",
                  "& input": {
                    textAlign: "center",
                  },
                }}
                size="small"
                variant="outlined"
                labelId="category-label"
                id="category"
                fullWidth
                name="categoryId"
                value={categoryId || ""}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {categories?.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              <SortProducts />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              maxWidth="10rem"
            ></Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {(categoryId ? categoryProducts : filteredProducts).map((product) => {
            return (
              <Grid
                key={product.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{
                  boxShadow: "10px 10px 10px 10px transparent",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  ":hover": {
                    boxShadow: "10px 10px 10px 10px #ccc",
                    alignItems: "center",
                  },
                }}
              >
                <FormControl component="form">
                  <CardContent>
                    <Link to={`/products/${product.id}`}>
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
            color="success"
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

export default ProductLists;
