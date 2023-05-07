import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { Link as RouterLink } from "react-router-dom";
import backgroundImage from "../../../images/hero-webp.webp"; // Under Standart ShutterStock License


export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Стань независимым больным
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Вооружись знаниями, опытом и навыками для битвы с диабетом. Скидки до 75% для подходящих абитуриентов.
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
        Войди в умное сообщество
      </Typography>
    </ProductHeroLayout>
  );
}
