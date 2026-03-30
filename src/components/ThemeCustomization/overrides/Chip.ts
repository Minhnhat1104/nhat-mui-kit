// material-ui
import { Theme } from "@mui/material/styles";

// project import
import { ExtendedStyleProps } from "../types/extended";
import getColors from "@src/utils/getColors";

// types

// ==============================|| CHIP - COLORS ||============================== //

function getColor({ color, theme }: ExtendedStyleProps) {
  const colors = getColors(theme, color);
  const { dark } = colors;

  return {
    "&.Mui-focusVisible": {
      outline: `2px solid ${dark}`,
      outlineOffset: 2,
    },
  };
}

function getColorStyle({ color, theme }: ExtendedStyleProps) {
  const colors = getColors(theme, color);
  const { light, lighter, main } = colors;

  return {
    color: main,
    backgroundColor: lighter,
    borderColor: light,
    "& .MuiChip-deleteIcon": {
      color: main,
      "&:hover": {
        color: light,
      },
    },
  };
}

// ==============================|| OVERRIDES - CHIP ||============================== //

export default function Chip(theme: Theme) {
  const defaultLightChip = getColorStyle({ color: "secondary", theme });
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          // fontSize: theme.typography.h6.fontSize,
          // fontWeight: theme.typography.h6.fontWeight,
          height: "unset",
          p: 0,
          borderRadius: 4,
          "&:active": {
            boxShadow: "none",
          },
          "&.MuiChip-colorPrimary": getColor({ color: "primary", theme }),
          "&.MuiChip-colorSecondary": getColor({ color: "secondary", theme }),
          "&.MuiChip-colorError": getColor({ color: "error", theme }),
          "&.MuiChip-colorInfo": getColor({ color: "info", theme }),
          "&.MuiChip-colorSuccess": getColor({ color: "success", theme }),
          "&.MuiChip-colorWarning": getColor({ color: "warning", theme }),
        },
        sizeSmall: {
          borderRadius: 4,
          fontSize: 10,
          fontWeight: 500,
          "& .MuiChip-label": {
            padding: "2px 8px",
          },
        },
        sizeMedium: {
          borderRadius: 4,
          fontSize: 12,
          fontWeight: 400,
          "& .MuiChip-label": {
            padding: "4px 8px",
          },
        },
        sizeLarge: {
          borderRadius: 4,
          fontSize: 14,
          fontWeight: 400,
          "& .MuiChip-label": {
            padding: "4px 12px",
          },
        },
        light: {
          ...defaultLightChip,
          "&.MuiChip-lightPrimary": getColorStyle({ color: "primary", theme }),
          "&.MuiChip-lightSecondary": getColorStyle({
            color: "secondary",
            theme,
          }),
          "&.MuiChip-lightError": getColorStyle({ color: "error", theme }),
          "&.MuiChip-lightInfo": getColorStyle({ color: "info", theme }),
          "&.MuiChip-lightSuccess": getColorStyle({ color: "success", theme }),
          "&.MuiChip-lightWarning": getColorStyle({ color: "warning", theme }),
        },
        combined: {
          border: "1px solid",
          ...defaultLightChip,
          "&.MuiChip-combinedPrimary": getColorStyle({
            color: "primary",
            theme,
          }),
          "&.MuiChip-combinedSecondary": getColorStyle({
            color: "secondary",
            theme,
          }),
          "&.MuiChip-combinedError": getColorStyle({ color: "error", theme }),
          "&.MuiChip-combinedInfo": getColorStyle({ color: "info", theme }),
          "&.MuiChip-combinedSuccess": getColorStyle({
            color: "success",
            theme,
          }),
          "&.MuiChip-combinedWarning": getColorStyle({
            color: "warning",
            theme,
          }),
        },
      },
      variants: [
        {
          props: { variant: "greyLight" },
          style: {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.softGrey,
          },
        },
      ],
    },
  };
}
