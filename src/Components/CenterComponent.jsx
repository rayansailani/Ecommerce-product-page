import React from "react";
import { Box } from "@mui/material";

const CenterComponent = ({ children }) => {
  return (
    <Box sx={{ height: "100%", display: "grid", placeItems: "center" }}>
      {children}
    </Box>
  );
};

export default CenterComponent;
