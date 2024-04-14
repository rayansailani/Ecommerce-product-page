import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import cartState from "../State/CartState";

const AddToCart = () => {

  const [cart, setCart] = useRecoilState(cartState);
  const [cartItems, setCartItem] = useState(0);

  const incrementCartItems = () => {
    setCartItem((prev) => ++prev);
  };

  const decrementCartItems = () => {
    setCartItem((prev) => {
      if(prev === 0)
        return 0;
      else return --prev;
    });
  };

  const addItemToCart = () =>{
    if(cartItems !== 0)
      setCart(cart + cartItems);
  }

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button onClick={() => decrementCartItems()}>
          <Typography sx={{ fontWeight: "700" }}>-</Typography>
        </Button>
        <Typography sx={{ fontWeight: "700" }}>{cartItems}</Typography>
        <Button onClick={()=> incrementCartItems()}>
          <Typography sx={{ fontWeight: "700" }}>+</Typography>
        </Button>
      </Box>
      <Button
        variant="contained"
        sx={{ padding: "0.8rem 4rem", borderRadius: "0.7rem" }}
      >
        <img src="images/icon-cart.svg" alt="cart icon" />
        <Typography
          variant="body2"
          sx={{
            color: "white",
            fontWeight: "700",
            marginLeft: "01rem",
            textTransform: "none",
          }}
          onClick={() => addItemToCart()}
        >
          Add to cart
        </Typography>
      </Button>
    </Box>
  );
};

export default AddToCart;
