import React from 'react';
import { Container, Typography } from '@mui/material';
import Banner from './components/Banner';
import ProductGrid from './components/ProductGrid';
import MapSection from './components/MapSection';

const HomeScreen = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Banner image={"https://img.freepik.com/free-psd/black-friday-gaming-mouse-sale-social-media-banner-design-template_47987-25430.jpg?semt=ais_hybrid&w=740"} />
      <Typography variant="h4" gutterBottom>Trending Products</Typography>
      <ProductGrid />
      <MapSection />
    </Container>
  );
};

export default HomeScreen;
