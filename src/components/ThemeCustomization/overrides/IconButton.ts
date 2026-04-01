// material-ui
import { Theme } from "@mui/material/styles";
import { palleteColors } from "..";
import { customButtonVariants } from "./Button";

export default function ThemeIconButton(theme: Theme) {
  const customIconButtonVariants = palleteColors?.reduce(
    (prev: any[], color) => {
      const { darker, dark, main, light, lighter, contrastText } =
        theme.palette[color];

      prev.push({
        props: { variant: "contained" as const, color },
        style: {
          background: main,
          color: contrastText,
          "&:hover": {
            background: dark,
            border: `1px solid ${dark}`,
          },
        },
      });

      return prev;
    },
    [],
  );

  return {
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          width: 32,
          height: 32,
          "& svg": {
            flexShrink: 0,
            fontSize: 14,
            width: 14,
            height: 14,
          },
        },
        sizeMedium: {
          width: 36,
          height: 36,
          "& svg": {
            flexShrink: 0,
            fontSize: 16,
            width: 16,
            height: 16,
          },
        },
        sizeLarge: {
          width: 40,
          height: 40,
          "& svg": {
            flexShrink: 0,
            fontSize: 18,
            width: 18,
            height: 18,
          },
        },
      },
      defaultProps: {
        shape: "square" as const,
        "& svg": {
          fontSize: "inherit",
        },
      },
      variants: [...customIconButtonVariants, ...customButtonVariants(theme)],
    },
  };
}
