// src/page/Home/components/ProductGrid.tsx
import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import { products } from '../constant/data';

const ProductGrid: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        //@ts-ignore
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
