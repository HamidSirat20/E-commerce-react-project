import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import ProductCard from "./ProductCard";
import SortFilterProducts from "./SortProducts";
import { fetchAllProducts } from "../redux/reducers/productsReducer";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import Product from "../types/Product";
import useDebounce from "./useDebounce";
import { inherits } from "util";

const filterProductByName = (product: Product[], search: string) => {
  return product.filter((item) => item.title.toLowerCase().includes(search));
};
const TemplateCard = () => {
  const productList = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(9);
  const handleLoad = () => {
    setPage(page + 9);
  };

  useEffect(() => {
    dispatch(fetchAllProducts({ offset: 0, limit: page }));
    setLoading(false);
  }, [page]);
  const { onChangeFilter, filter, filteredProducts } = useDebounce<Product>(
    filterProductByName,
    productList.products
  );
  return (
    <Box paddingTop={10}>
      {loading && <LinearProgress />}
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
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={{
                id: product.category.id,
                name: product.category.name,
                image: product.category.image,
              }}
              images={product.images}
            ></ProductCard>
          );
        })}
      </Grid>
      <Button fullWidth variant="contained"  onClick={handleLoad}>Load More...</Button>
    </Box>
  );
};

export default TemplateCard;
