// material-ui
import { Theme } from "@mui/material/styles";

// ==============================|| OVERRIDES - ICON BUTTON ||============================== //

const getSvgSize = (size: "small" | "medium" | "large" = "medium") => {
  return size === "small" ? 14 : size === "large" ? 18 : 16;
};

export default function IconButton(theme: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          // borderRadius: 4,
        },
        sizeSmall: {
          width: 32,
          height: 32,
          "& svg": {
            flexShrink: 0,
            width: 14,
            height: 14,
          },
        },
        sizeMedium: {
          width: 36,
          height: 36,
          "& svg": {
            flexShrink: 0,
            width: 16,
            height: 16,
          },
        },
        sizeLarge: {
          width: 40,
          height: 40,
          "& svg": {
            flexShrink: 0,
            width: 18,
            height: 18,
          },
        },
      },
      defaultProps: {
        shape: "rounded",
      },
      variants: [
        {
          props: { shape: "rounded" as const },
          style: {
            borderRadius: 999,
          },
        },
        {
          props: { shape: "square" as const },
          style: {
            borderRadius: 4,
          },
        },
      ],
    },
  };
}
