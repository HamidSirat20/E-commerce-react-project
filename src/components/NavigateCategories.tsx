import React, { useEffect,useState } from "react";
import useAppSelector from "../hooks/useAppSelector";
import { Box, Button, CardMedia, Stack } from "@mui/material";
import useAppDispatch from "../hooks/useAppDispatch";
import { fetchAllCategories } from "../redux/reducers/categoryReducer";
import clothes from "../../src/tests/data/sliderData/clothes.jpg";
const NavigateCategories = () => {
  const products = useAppSelector((state) => state.productsReducer.products);
  const dispatch = useAppDispatch();
  const image = clothes;
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);
  const categories = useAppSelector((state) => state.categoryReducer);
  return (
    <Box>
      <Stack
        marginBottom={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "2rem",
          flexDirection: "row",
        }}
      >
        {/* {categories.map((categ) => {
          return (
            <Box
              key={categ.id}
              sx={{
                marginRight: "0.25rem",
              }}
            >
              <Button
              // onClick={setCategory(categ)}
                variant="outlined"
                sx={{
                  width: "100%",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "Blue",
                    color: "white",
                  },
                }}
              >
                {categ.name}
              </Button>
            </Box>
          );
        })} */}
      </Stack>
      <Box
        sx={{
          backgroundColor: "green",
          padding: "0.5rem",
          width: "55%",
          margin: "auto",
          borderRadius: "0.25rem",
        }}
      >
        <Box
          marginTop={2}
          component="h3"
          sx={{
            color: "red",
            textAlign: "center",
            fontSize: "1.125rem",
            fontFamily: "Inter",
            fontWeight: "bold",
            letterSpacing: "normal",
            lineHeight: "1",
          }}
        >
          SALES UP TO 50%
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: "1rem",
        }}
      >
        <CardMedia
          sx={{
            height: "600px",
            width: "70%",
            borderRadius: "0.25rem",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.15)",
          }}
          image={image}
        ></CardMedia>
      </Box>
    </Box>
  );
};

export default NavigateCategories;
function uesState(): [any, any] {
  throw new Error("Function not implemented.");
}
