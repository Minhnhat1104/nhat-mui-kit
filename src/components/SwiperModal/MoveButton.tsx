import { IconButton } from "@mui/material";
import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import { useSwiper } from "swiper/react";

interface MoveButtonProps {
  type: "next" | "prev";
}

const MoveButton = ({ type }: MoveButtonProps) => {
  const swiper = useSwiper();

  return (
    <IconButton
      onClick={() =>
        type === "next" ? swiper.slideNext() : swiper.slidePrev()
      }
      size="large"
      sx={{
        position: "absolute",
        top: "50%",
        ...(type === "next" ? { right: 20 } : { left: 20 }),
        zIndex: 1,
        transform: "translateY(-100%)",
      }}
    >
      {type === "prev" && <ChevronLeft />}
      {type === "next" && <ChevronRight />}
    </IconButton>
  );
};

export default MoveButton;
