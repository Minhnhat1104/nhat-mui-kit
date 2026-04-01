import { PaletteColorOptions } from "@mui/material/styles";
import {
  blue,
  red,
  orange,
  lightBlue,
  green,
  grey,
  amber,
} from "@mui/material/colors";
import { PaletteThemeProps } from "../types/theme";

const DashForge = (mode: "light" | "dark" = "light"): PaletteThemeProps => {
  const greyColors: PaletteColorOptions = {
    0: "#ffffff",
    50: grey[50], // #fafafa
    100: grey[100], // #f5f5f5
    200: grey[200], // #eeeeee
    300: grey[300], // #e0e0e0
    400: grey[400], // #bdbdbd
    500: grey[500], // #9e9e9e
    600: grey[600], // #757575
    700: grey[700], // #616161
    800: grey[800], // #424242
    900: grey[900], // #212121
    A50: grey[50],
    A100: grey[100],
    A200: grey[200],
    A400: grey[400],
    A700: grey[700],
    A800: grey[800],
    lighter: mode === "light" ? grey[100] : grey[800],
    light: mode === "light" ? grey[200] : grey[700],
    main: mode === "light" ? grey[500] : grey[500],
    dark: mode === "light" ? grey[700] : grey[300],
    darker: mode === "light" ? grey[900] : grey[100],
  };

  const contrastText = mode === "light" ? "#fff" : "#1D2125";
  const disableColor = grey[500];

  return {
    primary: {
      lighter: mode === "light" ? blue[50] : blue[900],
      light: mode === "light" ? blue[200] : blue[700],
      main: mode === "light" ? blue[600] : blue[400],
      dark: mode === "light" ? blue[800] : blue[200],
      darker: mode === "light" ? blue[900] : blue[50],
      contrastText: contrastText,
      disableColor: contrastText,
    },
    secondary: {
      lighter: mode === "light" ? grey[100] : grey[800],
      light: mode === "light" ? grey[200] : grey[700],
      main: mode === "light" ? grey[600] : grey[400],
      dark: mode === "light" ? grey[800] : grey[200],
      darker: mode === "light" ? grey[900] : grey[100],
      contrastText: contrastText,
      disableColor: contrastText,
    },
    error: {
      lighter: mode === "light" ? red[50] : red[900],
      light: mode === "light" ? red[200] : red[700],
      main: mode === "light" ? red[600] : red[400],
      dark: mode === "light" ? red[800] : red[200],
      darker: mode === "light" ? red[900] : red[50],
      contrastText,
      disableColor: contrastText,
    },
    warning: {
      lighter: mode === "light" ? amber[50] : amber[900],
      light: mode === "light" ? amber[200] : amber[700],
      main: mode === "light" ? amber[600] : amber[400],
      dark: mode === "light" ? amber[800] : amber[200],
      darker: mode === "light" ? amber[900] : amber[50],
      contrastText: mode === "light" ? grey[900] : grey[900],
      disableColor,
    },
    info: {
      lighter: mode === "light" ? lightBlue[50] : lightBlue[900],
      light: mode === "light" ? lightBlue[200] : lightBlue[700],
      main: mode === "light" ? lightBlue[600] : lightBlue[400],
      dark: mode === "light" ? lightBlue[800] : lightBlue[200],
      darker: mode === "light" ? lightBlue[900] : lightBlue[50],
      contrastText: contrastText,
      disableColor,
    },
    success: {
      lighter: mode === "light" ? green[50] : green[900],
      light: mode === "light" ? green[200] : green[700],
      main: mode === "light" ? green[600] : green[400],
      dark: mode === "light" ? green[800] : green[200],
      darker: mode === "light" ? green[900] : green[50],
      contrastText,
      disableColor: contrastText,
    },
    light: {
      lighter: grey[50],
      light: grey[100],
      main: grey[200],
      dark: grey[300],
      darker: grey[400],
      contrastText: grey[900],
      disableColor,
    },
    dark: {
      lighter: grey[500],
      light: grey[600],
      main: grey[700],
      dark: grey[800],
      darker: grey[900],
      contrastText: "#fff",
      disableColor: contrastText,
    },
    text: {
      primary: mode === "light" ? grey[900] : grey[100],
      secondary: mode === "light" ? grey[700] : grey[300],
      disabled: mode === "light" ? grey[500] : grey[500],
      dark: grey[900],
    },
    background: {
      paper: mode === "light" ? "#FFFFFF" : grey[900],
      default: mode === "light" ? "#FFFFFF" : "#121212",
      card: mode === "light" ? grey[50] : grey[800],
      softGrey: mode === "light" ? grey[100] : grey[800],
      darkGrey: mode === "light" ? grey[200] : grey[700],
      lightGrey: mode === "light" ? grey[50] : grey[900],
    },
    divider:
      mode === "light" ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)",
    border: {
      light: mode === "light" ? grey[200] : grey[700],
      main:
        mode === "light" ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)",
      dark: mode === "light" ? grey[400] : grey[500],
    },
    grey: greyColors,
    header: grey[100],
    link: mode === "light" ? blue[600] : blue[400],
  };
};

export default DashForge;
