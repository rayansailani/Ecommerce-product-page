import React from "react";
import { Typography, Box } from "@mui/material";
import PricingComponent from "./PricingComponent";
import CenterComponent from "./CenterComponent";
import AddToCart from "./AddToCart";

const ProductDescription = () => {
  return (
    <CenterComponent>
      <Box
        sx={{
          padding: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="body2" sx={{ color: " hsl(26, 100%, 55%)", fontWeight: "700" }}>
          SNEAKER COMPANY
        </Typography>
        <br />
        <Typography variant="h3" sx={{ fontWeight: "700" }}>
          Fall Limited Edition Sneakers
        </Typography>
        <br />
        <br />
        <Typography variant="body1" sx={{ color: "hsl(219, 9%, 45%)" }}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Typography>
        <br />
        <PricingComponent />
        <br />
        <br />
        <AddToCart />
      </Box>
    </CenterComponent>
  );
};

export default ProductDescription;
