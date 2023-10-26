import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import useAppDispatch from "../hooks/useAppDispatch";
import { createNewProducts } from "../redux/reducers/productsReducer";

const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      createNewProducts({ title, description, price, categoryId, images })
    );
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
        Create Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <TextField
          label="Category ID"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
        />
        <TextField
          label="Image URLs (comma separated)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={images}
          onChange={(e) => setImages(e.target.value.split(","))}
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

export default CreateProduct;
