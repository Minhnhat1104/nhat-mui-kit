// material-ui
import { alpha, createTheme, Theme } from "@mui/material/styles";

// project import
import {
  ButtonVariantProps,
  ColorProps,
  ExtendedStyleProps,
} from "@src/components/ThemeCustomization/types/extended";
import getColors from "@src/utils/getColors";
import getShadow from "@src/utils/getShadow";

import { paletteColors } from "..";

// types

// ==============================|| BUTTON - COLORS ||============================== //

interface ButtonStyleProps extends ExtendedStyleProps {
  variant: ButtonVariantProps;
}

function getColorStyle({ variant, color, theme }: ButtonStyleProps) {
  const colors = getColors(theme, color);
  let { lighter, main, dark, contrastText } = colors;

  if (color === "secondary") {
    lighter = theme.palette.background.lightGrey || lighter;
    main = theme.palette.grey.main;
    dark = theme.palette.grey.darker;
    contrastText = "#fff";
  }

  const buttonShadow = `${color}Button`;
  const shadows = getShadow(theme, buttonShadow);

  const commonShadow = {
    "&::after": {
      boxShadow: `0 0 5px 5px ${alpha(main, 0.9)}`,
    },
    "&:active::after": {
      boxShadow: `0 0 0 0 ${alpha(main, 0.9)}`,
    },
    "&:focus-visible": {
      outline: `2px solid ${dark}`,
      outlineOffset: 2,
    },
  };

  switch (variant) {
    case "contained":
      return {
        "&:hover": {
          backgroundColor: dark,
        },
        ...commonShadow,
      };
    case "shadow":
      return {
        color: contrastText,
        backgroundColor: main,
        boxShadow: shadows,
        "&:hover": {
          boxShadow: "none",
          backgroundColor: dark,
        },
        ...commonShadow,
      };
    case "outlined":
      return {
        color: color === "secondary" ? theme.palette.grey.main : undefined,
        borderColor: color === "secondary" ? theme.palette.border.main : main,
        backgroundColor:
          color === "secondary" ? theme.palette.common.white : "transparent",
        "& svg": {
          color: "currentColor",
          strokeWidth: 2,
          transition: "color 0.5s",
        },
        "&:hover": {
          color: color === "secondary" ? theme.palette.grey.dark : dark,
          backgroundColor:
            color === "secondary"
              ? theme.palette.background.lightGrey
              : "transparent",
          borderColor: color === "secondary" ? theme.palette.grey.dark : dark,
          "& svg": {
            color: "currentColor",
          },
        },
        "&.Mui-disabled": {
          border: `1px solid ${lighter}`,
          color: lighter,
        },
        ...commonShadow,
      };
    case "dashed":
      return {
        color: main,
        borderColor: main,
        backgroundColor: lighter,
        "&:hover": {
          color: dark,
          borderColor: dark,
        },
        ...commonShadow,
      };
    case "text":
      return {
        color: color === "secondary" ? theme.palette.grey.main : undefined,
        "&:hover": {
          color: dark,
          backgroundColor: lighter,
        },
        ...commonShadow,
      };
  }
}

// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme: Theme) {
  const primaryDashed = getColorStyle({
    variant: "dashed",
    color: "primary",
    theme,
  });
  const primaryShadow = getColorStyle({
    variant: "shadow",
    color: "primary",
    theme,
  });

  const getDisabledStyle = (color: ColorProps) => ({
    "&.Mui-disabled": {
      backgroundColor: getColors(theme, color)?.lighter,
      color: theme.palette.common.white,
    },
  });

  const iconStyle = {
    "&>*:nth-of-type(1)": {
      fontSize: "inherit",
    },
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: theme.typography.h4.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          "&::after": {
            content: '""',
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: 4,
            opacity: 0,
            transition: "all 0.5s",
          },

          "&:active::after": {
            position: "absolute",
            borderRadius: 4,
            left: 0,
            top: 0,
            opacity: 1,
            transition: "0s",
          },
        },
        sizeSmall: {
          height: 28,
        },
        sizeMedium: {
          height: 32,
        },
        sizeLarge: {
          height: 36,
        },
        contained: ({ ownerState }: any) => ({
          ...getDisabledStyle(ownerState?.color),
        }),
        outlined: ({ ownerState }: any) => ({
          ...getColorStyle({
            variant: "outlined",
            color: ownerState?.color,
            theme,
          }),
        }),
        text: ({ ownerState }: any) => ({
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          ...(ownerState?.color === "secondary" && {
            "&.Mui-disabled": {
              color: theme.palette.grey.lighter,
            },
          }),
        }),
        greyLight: ({ ownerState }: any) => ({
          ...getColorStyle({ variant: "greyLight", color: "secondary", theme }),
          // ...getDisabledStyle(ownerState?.color),
          "&.Mui-disabled": {
            color: theme.palette.grey.lighter,
            backgroundColor: theme.palette.background.lightGrey,
          },
        }),
        endIcon: {
          ...iconStyle,
        },
        startIcon: {
          ...iconStyle,
        },
        dashed: {
          border: "1px dashed",
          ...primaryDashed,
          "&.MuiButton-dashedPrimary": getColorStyle({
            variant: "dashed",
            color: "primary",
            theme,
          }),
          "&.MuiButton-dashedSecondary": getColorStyle({
            variant: "dashed",
            color: "secondary",
            theme,
          }),
          "&.MuiButton-dashedError": getColorStyle({
            variant: "dashed",
            color: "error",
            theme,
          }),
          "&.MuiButton-dashedSuccess": getColorStyle({
            variant: "dashed",
            color: "success",
            theme,
          }),
          "&.MuiButton-dashedInfo": getColorStyle({
            variant: "dashed",
            color: "info",
            theme,
          }),
          "&.MuiButton-dashedWarning": getColorStyle({
            variant: "dashed",
            color: "warning",
            theme,
          }),
          "&.Mui-disabled": {
            color: `${theme.palette.grey[300]} !important`,
            borderColor: `${theme.palette.grey[400]} !important`,
            backgroundColor: `${theme.palette.grey[200]} !important`,
          },
        },
        shadow: {
          ...primaryShadow,
          "&.MuiButton-shadowPrimary": getColorStyle({
            variant: "shadow",
            color: "primary",
            theme,
          }),
          "&.MuiButton-shadowSecondary": getColorStyle({
            variant: "shadow",
            color: "secondary",
            theme,
          }),
          "&.MuiButton-shadowError": getColorStyle({
            variant: "shadow",
            color: "error",
            theme,
          }),
          "&.MuiButton-shadowSuccess": getColorStyle({
            variant: "shadow",
            color: "success",
            theme,
          }),
          "&.MuiButton-shadowInfo": getColorStyle({
            variant: "shadow",
            color: "info",
            theme,
          }),
          "&.MuiButton-shadowWarning": getColorStyle({
            variant: "shadow",
            color: "warning",
            theme,
          }),
          "&.Mui-disabled": {
            color: `${theme.palette.grey[300]} !important`,
            borderColor: `${theme.palette.grey[400]} !important`,
            backgroundColor: `${theme.palette.grey[200]} !important`,
          },
        },
        containedPrimary: getColorStyle({
          variant: "contained",
          color: "primary",
          theme,
        }),
        containedSecondary: getColorStyle({
          variant: "contained",
          color: "secondary",
          theme,
        }),
        containedError: getColorStyle({
          variant: "contained",
          color: "error",
          theme,
        }),
        containedSuccess: getColorStyle({
          variant: "contained",
          color: "success",
          theme,
        }),
        containedInfo: getColorStyle({
          variant: "contained",
          color: "info",
          theme,
        }),
        containedWarning: getColorStyle({
          variant: "contained",
          color: "warning",
          theme,
        }),
        outlinedPrimary: getColorStyle({
          variant: "outlined",
          color: "primary",
          theme,
        }),
        outlinedSecondary: getColorStyle({
          variant: "outlined",
          color: "secondary",
          theme,
        }),
        outlinedError: getColorStyle({
          variant: "outlined",
          color: "error",
          theme,
        }),
        outlinedSuccess: getColorStyle({
          variant: "outlined",
          color: "success",
          theme,
        }),
        outlinedInfo: getColorStyle({
          variant: "outlined",
          color: "info",
          theme,
        }),
        outlinedWarning: getColorStyle({
          variant: "outlined",
          color: "warning",
          theme,
        }),
        textPrimary: getColorStyle({
          variant: "text",
          color: "primary",
          theme,
        }),
        textSecondary: getColorStyle({
          variant: "text",
          color: "secondary",
          theme,
        }),
        textError: getColorStyle({ variant: "text", color: "error", theme }),
        textSuccess: getColorStyle({
          variant: "text",
          color: "success",
          theme,
        }),
        textInfo: getColorStyle({ variant: "text", color: "info", theme }),
        textWarning: getColorStyle({
          variant: "text",
          color: "warning",
          theme,
        }),
        sizeExtraSmall: {
          minWidth: 56,
          fontSize: "0.625rem",
          padding: "2px 8px",
        },
      },
      variants: [
        ...paletteColors?.map((color) => {
          const { darker, dark, main, light, lighter } = theme.palette[color];
          return {
            props: { variant: "light", color },
            style: {
              color: main,
              backgroundColor: lighter,
              "&:hover": {
                color: dark,
                backgroundColor: light,
              },
              "&:active": {
                color: darker,
                backgroundColor: main,
              },
            },
          };
        }),

        {
          props: { variant: "greyLight" },
          style: {
            background: theme.palette.background.lightGrey,
            color: theme.palette.text.primary,
            "&:hover": {
              background: theme.palette.background.softGrey,
              color: theme.palette.text.primary,
            },
            "&:active": {
              color: theme.palette.text.primary,
              background: theme.palette.grey.lighter,
            },
          },
        },
      ],
    },
  };
}
