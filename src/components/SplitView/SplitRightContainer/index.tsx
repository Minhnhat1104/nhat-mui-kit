import React, { useRef, useState } from "react";

import { Box, SxProps, useTheme } from "@mui/material";
import { Allotment, AllotmentHandle } from "allotment";

import { LeftCollapse, RightCollapse } from "../icons";
import { SPLIT_MAX_SIZE, SPLIT_MIN_SIZE } from "..";
import "allotment/dist/style.css";

const PANE_CONTAINER_STYLES: SxProps = {
  height: "100%",
  overflow: "visible",
};

interface SplitRightContainerProps {
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
  showRightToggle?: boolean; // Knowledge > View
  initLeftSize?: number;
  onDragEnd?: (sizes: number[]) => void;
}

const SplitRightContainer = ({
  leftPane,
  rightPane,
  showRightToggle,
  initLeftSize,
  onDragEnd,
}: SplitRightContainerProps) => {
  const theme = useTheme();
  const allotmentRef = useRef<AllotmentHandle>(null);

  const [showRight, setShowRight] = useState(true);

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
      <Allotment ref={allotmentRef} onDragEnd={onDragEnd} separator>
        <Allotment.Pane minSize={0} preferredSize={initLeftSize}>
          <Box sx={{ ...PANE_CONTAINER_STYLES }}>{leftPane}</Box>
        </Allotment.Pane>

        <Allotment.Pane
          minSize={SPLIT_MIN_SIZE}
          maxSize={SPLIT_MAX_SIZE}
          visible={!!showRight}
        >
          <Box
            sx={{
              ...PANE_CONTAINER_STYLES,
              position: "relative",
            }}
          >
            {showRightToggle && (
              <Box
                sx={{
                  display: "flex",
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: `translate(${showRight ? 0 : "-100%"},-50%)`,
                  background: "#fff",
                  cursor: "pointer",
                  right: 0,
                  width: "fit-content",
                  color: theme.palette.primary.main,
                  transition: "color 0.15s ease-in-out",
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  },
                }}
                onClick={() => setShowRight(!showRight)}
              >
                {showRight ? <RightCollapse /> : <LeftCollapse />}
              </Box>
            )}
            {rightPane}
          </Box>
        </Allotment.Pane>
      </Allotment>
    </>
  );
};

export default SplitRightContainer;
