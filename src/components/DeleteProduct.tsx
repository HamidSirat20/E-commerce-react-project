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
} from "../redux/reducers/productsReducer";
import { useNavigate } from "react-router-dom";
import useAppSelector from "../hooks/useAppSelector";

const DeleteProduct = () => {
  const allProducts = useAppSelector((state) => state.productsReducer.products);
  const dispatch = useAppDispatch();
  const [productID, setProductID] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(deleteSignleProduct(productID));
  };

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
          Delete Product
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Typography
            variant="body1"
            gutterBottom
            style={{ marginBottom: "1rem" }}
          >
            Product ID:
          </Typography>
          <input
            id="outlined-basic"
            type="number"
            value={productID}
            onChange={(e) => setProductID(Number(e.target.value))}
            style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            startIcon={<DeleteIcon />}
            style={{ width: "100%", marginBottom: "1rem" }}
          >
            Delete
          </Button>
        </form>
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
                      onClick={() => dispatch(deleteSignleProduct(product.id))}
                    >
                      Delete
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

export default DeleteProduct;
