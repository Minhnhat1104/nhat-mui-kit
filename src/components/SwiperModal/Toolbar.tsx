import React, { forwardRef, RefObject } from "react";

import { Stack, Typography } from "@mui/material";
import { SwiperRef, useSwiper } from "swiper/react";

import { IconButton } from "@mui/material";
import { CloseOutlined, DownloadOutlined, ZoomInOutlined, ZoomOutOutlined } from "@mui/icons-material";

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
      <Typography variant="h4">{`${current} / ${total}`}</Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          size="large"
          color="secondary"
          onClick={() => swiperRef?.current?.swiper?.zoom?.in()}
        >
          <ZoomInOutlined />
        </IconButton>
        <IconButton
          size="large"
          color="secondary"
          onClick={() => swiperRef?.current?.swiper?.zoom?.out()}
        >
          <ZoomOutOutlined />
        </IconButton>
        <IconButton
          size="large"
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
          <DownloadOutlined />
        </IconButton>
        <IconButton
          size="large"
          color="secondary"
          onClick={onClose}
        >
          <CloseOutlined />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default forwardRef(Toolbar);
