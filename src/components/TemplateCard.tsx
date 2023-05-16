import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import ProductCard from "./ProductCard";
import SortFilterProducts from "./SortProducts";
import { fetchAllProducts } from "../redux/reducers/productsReducer";
import {
  Box,
  Grid,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import Product from "../types/Product";
import useDebounce from "./useDebounce";
const filterProductByName = (products: Product[], search: string) => {
  return products.filter((item) => item.title.toLowerCase().includes(search));
};
const TemplateCard = () => {
  const products = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchAllProducts());
    setLoading(false);
  }, []);
  const { onChangeFilter, filter, filteredProducts } = useDebounce<Product>(
    filterProductByName,
    products
  );
  return (
    <Box>
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
    </Box>
  );
};

export default TemplateCard;
