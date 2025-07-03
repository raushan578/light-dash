// components/ProductCard.tsx

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3 }}>
      <CardActionArea
        onClick={() => {
          sessionStorage.setItem(
            "transitionStart",
            performance.now().toString()
          );
          navigate(`/product/${product.id}`);
        }}
    >
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ₹{product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
