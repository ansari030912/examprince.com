"use client";
import { Icon } from "@iconify/react";
import { Snackbar, SnackbarContent } from "@mui/material";
import { useState } from "react";

const VideoTrainingCourseAddToCart = ({ data }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleBoxClick = (item) => {
    const cartData = {
      cart: data.cart,
      saveExam: true,
    };
    localStorage.removeItem("CartProducts");
    localStorage.setItem("CartProducts", JSON.stringify(cartData));
    setSnackbarOpen(true);
    // Reload the page
    window.location.reload();
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "green",
          }}
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="mdi:cart-outline"
                width="1.6em"
                height="1.4em"
                style={{ color: "white", marginRight: "2px" }}
              />
              Product added to cart!
            </span>
          }
        />
      </Snackbar>
      <div class="w-full px-2 mb-2 md:mb-0">
        <button
          onClick={handleBoxClick}
          class="block py-2 px-2 leading-8 w-full font-heading font-medium tracking-tighter text-lg text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default VideoTrainingCourseAddToCart;
