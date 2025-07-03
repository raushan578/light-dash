import React from 'react';
import { Typography, Box } from '@mui/material';

const MapSection = () => (
  <Box sx={{ mt: 6 }}>
    <Typography variant="h5" mb={2}>Explore Nearby Stores</Typography>
    <Box
      sx={{
        width: '100%',
        height: '300px',
        backgroundImage: `url("https://source.unsplash.com/1600x500/?map,location")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 2,
      }}
    />
  </Box>
);

export default MapSection;
