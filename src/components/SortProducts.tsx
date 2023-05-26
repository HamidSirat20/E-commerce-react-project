import React, { useState } from "react";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
import { Box, Button} from "@mui/material";

import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { sortByCategory, sortPrice } from "../redux/reducers/productsReducer";

const SortProducts = () => {
  const [sort, setSortPrice] = useState<"asc" | "desc">("asc");
  const [sortCategory, setsortCategory] = useState<"asc" | "desc">("asc");
  const products = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();
  const handleSort = () => {
    dispatch(sortPrice(sort));
    setSortPrice(sort === "asc" ? "desc" : "asc");
  };
  const handleSortCategory = () => {
    dispatch(sortByCategory(sortCategory));
    setsortCategory(sortCategory === "asc" ? "desc" : "asc");
  };
  return (
    <Box sx={{marginRight:'1rem'}}>
      <Button size="medium" variant="outlined" onClick={handleSort}>
        {sort === "asc" ? (
          <>
            <ArrowDropUpRoundedIcon /> <SortRoundedIcon />
          </>
        ) : (
          <>
            <ArrowDropDownRoundedIcon /> <SortRoundedIcon />
          </>
        )}
      </Button>
      <Button size="medium" sx={{marginLeft:'1rem'}} variant="outlined" onClick={handleSortCategory}>
        {sortCategory === "asc" ? (
          <>
            <ArrowDropUpRoundedIcon /> <SortByAlphaRoundedIcon />
          </>
        ) : (
          <>
            <ArrowDropDownRoundedIcon /> <SortByAlphaRoundedIcon />
          </>
        )}
      </Button>
    </Box>
  );
};

export default SortProducts;
