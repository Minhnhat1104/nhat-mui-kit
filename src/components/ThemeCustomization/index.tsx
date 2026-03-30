import { ReactNode, useMemo } from "react";

import { CssBaseline, StyledEngineProvider } from "@mui/material";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  Theme,
  PaletteOptions,
} from "@mui/material/styles";

import componentsOverride from "./overrides";
import Palette from "./palette";
import CustomShadows from "./shadows";
import Typography from "./typography";
import themes from "./themeLoader";

interface ThemeCustomizationProps {
  color: string;
  children: ReactNode;
}

type Color = "primary" | "secondary" | "success" | "error" | "info" | "warning";

export const paletteColors: Color[] = [
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
  "info",
];

const ThemeCustomization = ({ color, children }: ThemeCustomizationProps) => {
  const themeSetting = themes[color] || themes["default"];

  const themeValue = useMemo<Theme>(() => {
    const themePallete: PaletteOptions = Palette(themeSetting);

    const themes: Theme = createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768, // old GW:  768 (inclusive)
          md: 1024, // old GW: 992 (inclusive)
          lg: 1266, // old Gw: above 1290 (exclusive)
          xl: 1440,
        },
      },
      // direction: themeDirection,
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: themePallete,
      customShadows: CustomShadows(themePallete),
      typography: Typography(themeSetting),
      border: {
        dark: `1px solid ${themePallete?.border?.dark}`,
        main: `1px solid ${themePallete?.border?.main}`,
        light: `1px solid ${themePallete?.border?.light}`,
      },
    } as ThemeOptions);
    themes.components = componentsOverride(themes);

    return themes;
  }, [themeSetting]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeValue}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeCustomization;
