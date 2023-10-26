import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import { fetchSingleProduct } from "../redux/reducers/productsReducer";
import Cart from "./Cart";

const ProductDetails = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { userId } = useParams<{ userId: string }>();
  const codeNumber = Number(userId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  var product = useAppSelector((state) => state.productsReducer);

  useEffect(() => {
    const fetchData = () => {
      return dispatch(fetchSingleProduct(codeNumber));
    };
    fetchData();
  }, [codeNumber, dispatch]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.products[0].images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!product) {
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

  return (
    <>
      <Box
        marginBottom={2}
        marginTop={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          [theme.breakpoints.down("md")]: {
            marginTop: "4rem",
          },
        }}
      >
        <IconButton
          sx={{
            padding: "1rem 4rem",
            color: "var(--light-mode-text)",
            textDecoration: "none",
            borderRadius: "1rem",
            boxShadow: "1px 5px 5px #cac7c7",
            backgroundColor: "var(--color-white)",
          }}
          component={Link}
          to={`/products`}
          color="primary"
        >
          <ArrowBackIosNewIcon />
          Back
        </IconButton>
      </Box>
      <Box
        marginBottom={10}
        paddingTop={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
          },
        }}
      >
        <Stack
          flexDirection="column"
          alignItems="center"
          sx={{
            [theme.breakpoints.up("md")]: {
              marginRight: "3rem",
            },
          }}
        >
          <Box>
            <CardContent>
              <CardMedia
                sx={{
                  borderRadius: "10px 10px 0 0",
                  [theme.breakpoints.down("md")]: {
                    height: 250,
                  },
                  [theme.breakpoints.up("md")]: {
                    height: 400,
                  },
                }}
                component="img"
                image={product.products[0].images[currentImageIndex] || ""}
                alt="product-image"
              />
            </CardContent>
          </Box>
          <Button onClick={handleNextImage}>More Images...</Button>
        </Stack>
        <Box
          marginTop="1rem"
          marginLeft="3rem"
          sx={{
            [theme.breakpoints.down("md")]: {
              marginLeft: 0,
              marginTop: "2rem",
            },
          }}
        >
          <Typography
            fontWeight="bold"
            gutterBottom
            variant="h6"
            textAlign="left"
          >
            Product: {product.products[0].title}
          </Typography>
          <Typography gutterBottom variant="h6" textAlign="left">
            Category: {product.products[0].category.name}
          </Typography>
          <Typography
            fontWeight="bold"
            variant="h6"
            textAlign="left"
            color="text.secondary"
          >
            Description: {product.products[0].description}
          </Typography>
          <Typography
            fontWeight="bold"
            variant="h6"
            textAlign="left"
            color="text.secondary"
          >
            Price: <Button>£ {product.products[0].price}</Button>
          </Typography>
        </Box>
      </Box>
      <Cart />
    </>
  );
};

export default ProductDetails;
