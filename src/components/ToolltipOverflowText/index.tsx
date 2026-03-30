import React, { useRef, useState } from "react";

import { SxProps, Tooltip, Typography } from "@mui/material";
import { useIsOverflow } from "./useIsOverflow";

interface TooltipOverflowTextProps {
  children: string;
  sx?: SxProps;
  lines?: number; // Thêm prop `lines` để xác định số dòng tối đa
}

const TooltipOverflowText = ({
  children,
  sx,
  lines = 1,
}: TooltipOverflowTextProps) => {
  const primaryRef = useRef<HTMLSpanElement>(null);

  const [overflow, setOverflow] = useState<boolean>(false);
  useIsOverflow(primaryRef, (hasOverflow) => setOverflow(hasOverflow));

  return (
    <Tooltip
      title={children}
      placement="top"
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -12],
              },
            },
          ],
        },
      }}
      disableFocusListener={!overflow}
      disableHoverListener={!overflow}
      disableInteractive={!overflow}
      disableTouchListener={!overflow}
    >
      <Typography
        ref={primaryRef}
        sx={
          {
            // ...ellipsisSx,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: lines, // Điều chỉnh số dòng
            overflow: "hidden",
            ...sx,
          } as SxProps
        }
      >
        {children}
      </Typography>
    </Tooltip>
  );
};

export default TooltipOverflowText;
