// screens/ProductScreen.tsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, CardMedia } from '@mui/material';
import { products } from './Home/constant/data';

const ProductScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>{product.name}</Typography>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
        sx={{ maxWidth: 400, marginBottom: 2 }}
      />
      <Typography variant="h6">Price: ₹{product.price}</Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 3 }}
        onClick={() => {
              sessionStorage.setItem(
            "transitionStart",
            performance.now().toString()
          );
            navigate(`/checkout/${product.id}`)
        }}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default ProductScreen;
