import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import useAppDispatch from '../hooks/useAppDispatch';
import { deleteSignleProduct } from '../redux/reducers/productsReducer';
import { useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [productID, setProductID] = useState(0)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(deleteSignleProduct(productID))
    }
    return (
        <>
            <Typography variant="h3" gutterBottom>Delete Product</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Box sx={{
              border: '1px solid lightblue',
              borderRadius: '8px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
                    <Typography variant="body1" gutterBottom>Product ID:</Typography>
                    <TextField id="outlined-basic" label="Product ID" variant="outlined" type="number" value={productID} onChange={(e) => setProductID(Number(e.target.value))} /><br />
                    <Button variant="contained" type="submit" endIcon={<SendIcon />}>Submit</Button>
                    <Button variant="contained" onClick={() => navigate("/products")}>Back</Button>
                </Box>
            </form>
        </>
    )
}

export default DeleteProduct