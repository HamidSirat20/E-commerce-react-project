import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useAppDispatch from "../hooks/useAppDispatch";
import {
  deleteSignleProduct,
  fetchAllProducts,
  fetchSingleProduct,
  updateSingleProduct,
} from "../redux/reducers/productsReducer";
import { useNavigate } from "react-router-dom";
import useAppSelector from "../hooks/useAppSelector";

const EditProductAdmin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const allProducts = useAppSelector((state) => state.productsReducer.products);

  useEffect(() => {
    dispatch(fetchAllProducts({ offset: 0, limit: 1000 }));
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginTop: "3.9rem",
      }}
    >
      <Box
        sx={{
          border: "1px solid lightblue",
          borderRadius: "8px",
          padding: "2rem",
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Update Product
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Images</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    £ {product.price}
                  </TableCell>
                  <TableCell>
                    <img
                      src={product.images.join(", ")}
                      alt={`product-image`}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "5px",
                      }}
                    />
                  </TableCell>
                  <TableCell>{product.category.name}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        navigate(`/update-product/${product.id}`);
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default EditProductAdmin;
