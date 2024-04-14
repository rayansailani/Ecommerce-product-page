import React from "react";
import MainContent from "./MainContent";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
const MainPage = () => {
  return (
    <Container sx={{ height: "100vh", overflowY: "hidden" }}>
      <Navbar />
      <MainContent />
    </Container>
  );
};

export default MainPage;
