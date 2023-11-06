import * as React from 'react';
import Button from '../components/Button';
import Typography from '@mui/material/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link as RouterLink } from 'react-router-dom';
import backgroundImage from '../../../images/hero-webp.png'; // Under Standart ShutterStock License

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#DBE2DE', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        Become an independent patient
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Discounts up to 75% for eligible patients with diabetes.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component={RouterLink}
        to="/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Регистрация
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Join the smart community and acquire the knowledge, experience, and
        skills for restoring your body's functionality.
      </Typography>
    </ProductHeroLayout>
  );
}
