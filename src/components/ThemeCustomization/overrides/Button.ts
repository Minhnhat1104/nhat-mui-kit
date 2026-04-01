// material-ui
import { alpha, Theme } from "@mui/material/styles";

import { palleteColors } from "..";

export const customButtonVariants = (theme: Theme) =>
  palleteColors?.reduce((prev: any[], color) => {
    const { darker, dark, main, light, lighter } = theme.palette[color];

    prev.push({
      props: { variant: "light" as const, color },
      style: {
        background: lighter,
        color: main,
        "&:hover": {
          background: light,
          color: dark,
        },
      },
    });

    prev.push({
      props: { variant: "dashed" as const, color },
      style: {
        background: "transparent",
        color: main,
        border: `1px dashed ${main}`,
        "&:hover": {
          color: dark,
          background: lighter,
          border: `1px dashed ${dark}`,
        },
      },
    });

    prev.push({
      props: { variant: "outlined" as const, color },
      style: {
        background: "transparent",
        color: main,
        border: `1px solid ${main}`,
        "&:hover": {
          color: dark,
          background: lighter,
          border: `1px solid ${dark}`,
        },
      },
    });

    return prev;
  }, []);

export default function ThemeButton(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        sizeSmall: {
          height: 32,
        },
        sizeMedium: {
          height: 36,
        },
        sizeLarge: {
          height: 40,
        },
      },
      variants: [...customButtonVariants(theme)],
    },
  };
}
