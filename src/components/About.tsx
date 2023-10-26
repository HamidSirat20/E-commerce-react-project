import React from "react";
import {
  Container,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const About = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        About ShopSwift
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        ShopSwift is your one-stop online destination for all your shopping
        needs. We offer a wide range of products including electronics, fashion,
        home decor, and much more. Our mission is to provide our customers with
        high-quality products, exceptional customer service, and a seamless
        online shopping experience.
      </Typography>
      <Typography variant="body1" align="center">
        At ShopSwift, we believe in making shopping easy, fast, and convenient.
        Whether you're looking for the latest gadgets, trendy fashion items, or
        unique gifts, you'll find it all here. Happy shopping!
      </Typography>
    </Container>
  );
};

export default About;
