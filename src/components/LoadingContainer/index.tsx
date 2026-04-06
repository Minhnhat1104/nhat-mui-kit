import React from "react";

import { Box, CircularProgress, Typography } from "@mui/material";

interface LoadingContainerProps {
  sx?: any;
  fullHeight?: boolean;
  label?: string;
  size?: "small" | "medium";
}

const circularSize = {
  small: 28,
  medium: 40,
};

const LoadingContainer = (props: LoadingContainerProps) => {
  const { sx, fullHeight = false, size = "medium", label } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: fullHeight ? "100%" : 350,
        ...sx,
      }}
    >
      <CircularProgress
        size={size}
        style={{ width: circularSize[size], height: circularSize[size] }}
      />
      {label && (
        <Typography
          noWrap
          color="text.secondary"
          sx={{ mt: 2, fontSize: size === "small" ? 12 : 13 }}
        >
          {label}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingContainer;
