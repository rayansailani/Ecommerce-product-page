import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { IconButton, Popover } from "@mui/material";
import { useRecoilValue } from "recoil";
import cartState from "../State/CartState";

const Navbar = () => {
  const cartCount = useRecoilValue(cartState);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (cartCount > 0) setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container fixed>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: 700, marginRight: "3rem" }}
              >
                sneakers
              </Typography>
              {["Collections", "Men", "Women", "About", "Contact"].map(
                (item) => {
                  return (
                    <Button
                      variant="text"
                      sx={{
                        color: "hsl(219, 9%, 45%)",
                        marginRight: "0.4rem",
                        paddingBottom: "0px",
                      }}
                    >
                      <Typography variant="body2">{item}</Typography>
                    </Button>
                  );
                }
              )}
            </Box>
            <Box>
              <IconButton
                sx={{ marginRight: "0.8rem", position: "relative" }}
                onClick={handleClick}
              >
                <img alt="cart-icon" src="images\icon-cart-grey.svg"></img>
                {cartCount > 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "20px",
                      width: "20px",
                      position: "absolute",
                      fontSize: "14px",
                      top: "0",
                      right: "0",
                      background: "hsl(26, 100%, 55%)",
                      borderRadius: "50%",
                      padding: "2px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {cartCount}
                  </div>
                )}
              </IconButton>
              <IconButton onClick={handleClick}>
                <img
                  alt="user-icon"
                  src="images\image-avatar.png"
                  style={{ height: "40px", width: "40px" }}
                ></img>
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                elevation={7}
              >
                <Box sx={{ padding: "1.2rem", minWidth: "400px !important" }}>
                  <Typography sx={{ fontWeight: "700" }} variant="body2">
                    Cart
                  </Typography>
                  <br />
                  <br />
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <img
                      src="images/image-product-1.jpg"
                      alt="cart item"
                      style={{ height: "40px", borderRadius: "0.4rem" }}
                    />
                    <Box>
                      <Typography variant="body1">
                        Fall Limited Edition Sneakers
                      </Typography>
                      <Typography variant="body2">
                        $125.00 x {cartCount}{" "}
                        <span style={{ fontWeight: "700" }}>
                          ${cartCount * 125.00}.00
                        </span>
                      </Typography>
                    </Box>
                    <IconButton>
                      <img src="images/icon-delete.svg" alt="click to delete" />
                    </IconButton>
                  </Box>
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      p: 1.4,
                      textTransform: "none",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    Checkout
                  </Button>
                </Box>
              </Popover>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
