import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import useAppDispatch from '../hooks/useAppDispatch';
import { updateSingleProduct } from '../redux/reducers/productsReducer';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const UpdateProduct = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [productID, setProductId] = useState(0)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [categoryId, setCategoryId] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateSingleProduct({ id: productID, update: { title, description, price, images } }))
  }
  return (
    <>
      <Typography variant="h3" gutterBottom>Update Product</Typography>
      <form onSubmit={e => handleSubmit(e)}>
        <Box sx={{
              border: '1px solid lightblue',
              borderRadius: '8px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
          <Typography variant="body1" gutterBottom>Productid:</Typography>
          <TextField id="outlined-basic" label="Product ID" variant="outlined" type="number" value={productID} onChange={(e) => setProductId(Number(e.target.value))} /><br />
          <Typography variant="body1" gutterBottom>Title:</Typography>
          <TextField id="outlined-basic" label="New Title" variant="outlined" type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
          <Typography variant="body1" gutterBottom>Description:</Typography>
          <TextField id="outlined-basic" label="New Description" variant="outlined" type="text" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
          <Typography variant="body1" gutterBottom>Price:</Typography>
          <TextField id="outlined-basic" label="New Pric" variant="outlined" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} /><br />
          <Typography variant="body1" gutterBottom>Category ID:</Typography>
          <TextField id="outlined-basic" label="New Category ID" variant="outlined" type="number" value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))} /><br />
          <Typography variant="body1" gutterBottom>Images:</Typography>
          <TextField id="outlined-basic" label="New Images" variant="outlined" type="text" value={images} onChange={(e) => setImages(e.target.value.split(","))} /><br />
          <Button variant="contained" type="submit" endIcon={<SendIcon />}>Submit</Button>
          <Button variant="contained" onClick={() => navigate("/products")}>Back</Button>
        </Box>
      </form>
    </>
  )
}

export default UpdateProduct