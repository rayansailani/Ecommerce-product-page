import React from "react";
import { Grid } from "@mui/material";
import ProductDescription from "./ProductDescription";
import Carousel from "./Carousel";

const MainContent = () => {
  return (
      <Grid container spacing={4} sx={{ height: "100%"}}>
        <Grid item xs={6} sx={{ height: "100%"}}>
          <Carousel />
        </Grid>
        <Grid item xs={6} sx={{ height: "100%"}}>
          <ProductDescription />
        </Grid>
      </Grid>
  );
};

export default MainContent;
