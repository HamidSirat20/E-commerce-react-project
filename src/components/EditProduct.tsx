import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useAppDispatch from "../hooks/useAppDispatch";
import {
  fetchSingleProduct,
  updateSingleProduct,
} from "../redux/reducers/productsReducer";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import useAppSelector from "../hooks/useAppSelector";
import Product from "../types/Product";
import { UpdateSingleProduct } from "../types/UpdateSingleProduct";

const EditProduct = () => {
  const { prodId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const singleProduct = useAppSelector(
    (state) => state.productsReducer.product
  );

  const [product, setProduct] = useState<UpdateSingleProduct>({
    id: 0,
    title: "",
    description: "",
    price: 0,
    categoryId: 0,
    images: [],
  });

  useEffect(() => {
    dispatch(fetchSingleProduct(Number(prodId)));
  }, [prodId]);

  useEffect(() => {
    if (singleProduct) {
      setProduct({
        id: singleProduct.id,
        title: singleProduct.title,
        description: singleProduct.description,
        price: singleProduct.price,
        categoryId: singleProduct.category.id,
        images: singleProduct.images,
      });
    }
  }, [singleProduct]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateSingleProduct({ ...product }));
    navigate(`/update-product`);
  };

  return (
    <Box
      sx={{
        border: "1px solid lightblue",
        borderRadius: "8px",
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
        marginTop: "4.3rem",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Edit Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: Number(e.target.value) })
          }
        />
        <TextField
          label="Category ID"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          value={product.categoryId}
          onChange={(e) =>
            setProduct({ ...product, categoryId: Number(e.target.value) })
          }
        />
        <TextField
          label="Image URLs (comma separated)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={product.images}
          onChange={(e) =>
            setProduct({ ...product, images: e.target.value.split(",") })
          }
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SendIcon />}
          style={{ margin: "1rem 0" }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default EditProduct;
