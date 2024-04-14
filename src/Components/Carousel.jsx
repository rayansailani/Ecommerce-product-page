import React from "react";
import { Box, Grid, Modal, IconButton } from "@mui/material";
import CenterComponent from "./CenterComponent";
import { useState } from "react";
const Carousel = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(1);
  const setCarouselIndex = (index) => {
    setSelectedImageIndex(index);
  };

  const incrementGallery = () => {
    setSelectedImageIndex((prev) => {
      if (prev === 4) return 1;
      prev++;
      return prev;
    });
  };

  const decrementGallery = () => {
    setSelectedImageIndex((prev) => {
      if (prev === 1) return 4;
      prev--;
      return prev;
    });
  };
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: 4,
  };
  return (
    <CenterComponent>
      <Box>
        <img
          src={"images/image-product-" + selectedImageIndex + ".jpg"}
          alt=""
          style={{ height: "400px", borderRadius: "1rem" }}
          onClick={() => handleOpen()}
        />
        <br />
        <br />
        <Grid container spacing={3}>
          {[1, 2, 3, 4].map((index) => {
            return (
              <Grid item xl={3}>
                <img
                  style={{
                    height: "80px",
                    width: "80px",
                    borderRadius: "0.8rem",
                    border:
                      selectedImageIndex === index
                        ? "solid 3px hsl(26, 100%, 55%)"
                        : "none",
                  }}
                  alt={"gallery-main" + index}
                  onClick={() => setCarouselIndex(index)}
                  src={"images/image-product-" + index + "-thumbnail.jpg"}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        tabIndex="0"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => decrementGallery()}
              sx={{
                background: "hsl(223, 64%, 98%)",
                height: "50px",
                width: "50px",
                marginRight: "-2rem",
                "&:hover": {
                  background: "hsl(223, 64%, 98%)",
                },
              }}
            >
              <img src="images/icon-previous.svg" alt="click for previous" />
            </IconButton>
            <img
              src={"images/image-product-" + selectedImageIndex + ".jpg"}
              alt="center in the gallery in the expanded gallery"
              style={{ height: "500px", borderRadius: "1rem" }}
            />
            <IconButton
              onClick={() => incrementGallery()}
              sx={{
                background: "hsl(223, 64%, 98%)",
                height: "50px",
                width: "50px",
                marginLeft: "-1.5rem",
                "&:hover": {
                  background: "hsl(223, 64%, 98%)",
                },
              }}
            >
              <img src="images/icon-next.svg" alt="click for next"/>
            </IconButton>
          </Box>
          <br />
          <br />
          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((index) => {
              return (
                <Grid item xl={3}>
                  <img
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "0.8rem",
                      border:
                        selectedImageIndex === index
                          ? "solid 3px hsl(26, 100%, 55%)"
                          : "none",
                    }}
                    alt={"gallery" + selectedImageIndex}
                    onClick={() => setCarouselIndex(index)}
                    src={"images/image-product-" + index + "-thumbnail.jpg"}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Modal>
    </CenterComponent>
  );
};

export default Carousel;
