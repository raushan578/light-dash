// screens/CheckoutScreen.tsx

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Snackbar,
  Alert,
} from '@mui/material';
import { products } from './Home/constant/data';

const CheckoutScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [snackOpen, setSnackOpen] = useState(false);

  const product = products.find((p : any) => p.id === Number(id));
  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  const handleBuyNow = () => {
    setSnackOpen(true);

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
        sx={{ maxWidth: 400, marginBottom: 2 }}
      />
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        ₹{product.price}
      </Typography>
      <Button variant="contained" color="success" onClick={handleBuyNow}>
        Buy Now
      </Button>

      <Snackbar
        open={snackOpen}
        autoHideDuration={1500}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Thanks for shopping!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CheckoutScreen;
