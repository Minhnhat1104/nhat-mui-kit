import React, { forwardRef, RefObject } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  X,
  ZoomIn,
  ZoomOut,
} from "react-feather";

import { Stack, Typography } from "@mui/material";
import { SwiperRef, useSwiper } from "swiper/react";

import { IconButton } from "@mui/material";

interface ToolbarProps {
  swiperRef: RefObject<SwiperRef>;
  onClose: () => void;
  current: number;
  total: number;
  currentImage: {
    id: string;
    name: string;
    url: string;
  };
}

const Toolbar = (
  { swiperRef, onClose, current, total, currentImage }: ToolbarProps,
  ref: any,
) => {
  return (
    <Stack
      ref={ref}
      slot="container-start"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ background: "#000", px: 2, height: 68, width: 1 }}
    >
      <Typography variant="h3">{`${current} / ${total}`}</Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          color="secondary"
          onClick={() => swiperRef?.current?.swiper?.zoom?.in()}
        >
          <ZoomIn size={24} />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={() => swiperRef?.current?.swiper?.zoom?.out()}
        >
          <ZoomOut size={24} />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={() => {
            const link = document.createElement("a");
            link.href = currentImage?.url;
            link.download = currentImage?.name; // download name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <Download size={24} />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={onClose}
        >
          <X size={24} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default forwardRef(Toolbar);
