import React from 'react';
import { Box } from '@mui/material';

interface Props {
  image: string;
}

const Banner: React.FC<Props> = ({ image }) => (
  <Box
    sx={{
      width: '100%',
      height: '300px',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 2,
      mb: 4
    }}
  />
);

export default Banner;
