import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
  Rating,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const EcommerceProductCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const product = {
    title: 'Wireless Headphones',
    description: 'Noise cancelling over-ear headphones with 40-hour battery life.',
    image: '/static/images/products/headphones.jpg',
    price: '$129.99',
    rating: 4.5,
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        marginLeft: isMobile ? 10 : 33,
        borderRadius: 3,
        boxShadow: 4,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.015)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" fontWeight={600}>
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, height: '48px', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {product.description}
        </Typography>

        <Typography variant="h6" color="primary" fontWeight={700}>
          {product.price}
        </Typography>

        <Rating value={product.rating} precision={0.5} readOnly sx={{ mt: 1 }} />
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<ShoppingCartIcon />}
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: 2,
          }}
        >
          Add to Cart
        </Button>
        <IconButton color="secondary" aria-label="add to wishlist">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
