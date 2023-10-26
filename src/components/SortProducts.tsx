import { useState } from "react";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import { Box, Button } from "@mui/material";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";

import useAppDispatch from "../hooks/useAppDispatch";
import { sortPrice } from "../redux/reducers/productsReducer";

const SortProducts = () => {
  const dispatch = useAppDispatch();
  const [sort, setSortPrice] = useState<"asc" | "desc">("asc");

  const handleSort = () => {
    dispatch(sortPrice(sort));
    setSortPrice(sort === "asc" ? "desc" : "asc");
  };

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "7rem",
        maxWidth: "60rem",
        borderRadius: "5px",
        marginLeft: "10px",
        "& input": {
          textAlign: "center",
        },
      }}
    >
      <Button size="large" variant="outlined" onClick={handleSort}>
        {sort === "asc" ? (
          <>
            <SwapVertOutlinedIcon /> <ArrowDropUpRoundedIcon />{" "}
            <SortRoundedIcon />
          </>
        ) : (
          <>
            <SwapVertOutlinedIcon /> <ArrowDropDownRoundedIcon />{" "}
            <SortRoundedIcon />
          </>
        )}
      </Button>
    </Box>
  );
};

export default SortProducts;
