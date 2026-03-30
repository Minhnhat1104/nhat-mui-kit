import React, { useRef } from "react";

import { Box, SxProps, useTheme } from "@mui/material";
import { Allotment, AllotmentHandle } from "allotment";
import { v4 } from "uuid";
import "allotment/dist/style.css";

export const SPLIT_MAX_SIZE = 500;
export const SPLIT_MIN_SIZE = 320;

const PANE_CONTAINER_STYLES: SxProps = {
  height: "100%",
  overflow: "visible",
};

interface SplitViewProps {
  isView?: boolean;
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
  isSplitMode?: boolean;
  leftInitSize?: number;
  onDragEnd?: (sizes: number[]) => void;
  leftMinSize?: number;
  leftMaxSize?: number;
}

const SplitView = (props: SplitViewProps) => {
  const {
    isView = false,
    leftPane,
    rightPane,
    isSplitMode,
    leftInitSize = 360,
    leftMinSize = SPLIT_MIN_SIZE,
    leftMaxSize = SPLIT_MAX_SIZE,
    onDragEnd,
  } = props;
  const theme = useTheme();

  const allotmentRef = useRef<AllotmentHandle>(null);
  const splitIdRef = useRef<string>(v4());

  //  ------------ make config ------------
  let hideLeft = false;
  let hideRight = false;
  if (!isSplitMode) {
    if (!isView) {
      hideRight = true;
    } else {
      hideLeft = true;
    }
  }

  return (
    <>
      <style>
        {`
          :root {
            --focus-border: ${theme.palette.primary.main};
            --separator-border: ${theme.palette.border.light};
          }
        `}
      </style>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          [`& #allotment-${splitIdRef.current.toString()} > .sash-container`]: {
            display: isSplitMode ? "block" : "none",
          },
        }}
      >
        <Allotment
          ref={allotmentRef}
          onDragEnd={onDragEnd}
          id={`allotment-${splitIdRef.current}`}
          separator={isSplitMode}
        >
          <Allotment.Pane
            minSize={isSplitMode ? leftMinSize : 0}
            maxSize={isSplitMode ? leftMaxSize : Infinity}
            visible={!hideLeft}
            preferredSize={leftInitSize}
          >
            {!hideLeft && (
              <Box sx={{ ...PANE_CONTAINER_STYLES }}>{leftPane}</Box>
            )}
          </Allotment.Pane>

          <Allotment.Pane minSize={0} visible={!hideRight}>
            {!hideRight && (
              <Box sx={{ ...PANE_CONTAINER_STYLES }}>{rightPane}</Box>
            )}
          </Allotment.Pane>
        </Allotment>
      </Box>
    </>
  );
};

export default SplitView;
