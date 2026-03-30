import { PaletteColorOptions, alpha } from "@mui/material/styles";
import { PaletteThemeProps } from "../types/theme";
import { ThemeSetting } from "../types/themeSetting";

const DashForge = (themeSetting: ThemeSetting): PaletteThemeProps => {
  let greyPrimary = [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#262626",
    "#141414",
    "#000000",
  ];
  let greyAscent = ["#fafafa", "#bfbfbf", "#434343", "#1f1f1f"];
  let greyConstant = ["#fafafb", "#e6ebf1"];

  const grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const greyColors: PaletteColorOptions = {
    0: grey[0],
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A50: grey[15],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
    A800: grey[16],
    lighter: themeSetting?.colors.grey?.lighter || "#bebebe",
    light: themeSetting?.colors.grey?.light || "#a9a9a9",
    main: themeSetting?.colors?.grey?.main || "#7f7f7f",
    dark: themeSetting?.colors?.grey?.dark || "#6a6a6a",
    darker: themeSetting?.colors?.grey?.darker || "#3f3f3f",
  };
  const contrastText = "#fff";
  const disableColor = "#000";

  return {
    primary: {
      lighter: themeSetting?.colors?.primary?.lighter || "#cce1fe",
      light: themeSetting?.colors?.primary?.light || "#b3d2fe",
      main: themeSetting?.colors?.primary?.main || "#0168fa",
      dark: themeSetting?.colors?.primary?.dark || "#0158d5",
      darker: themeSetting?.colors?.primary?.darker || "#0153c8",
      contrastText: themeSetting?.colors?.primary?.contrastText || contrastText,
      disableColor: contrastText,
    },
    // secondary: {
    //   lighter: themeSetting?.colors?.secondary?.lighter || '#f5f6fa', // item hover
    //   light: themeSetting?.colors?.secondary?.light || '#eef0f7', // item active
    //   main: themeSetting?.colors?.secondary?.main || '#8392A5',
    //   dark: themeSetting?.colors?.secondary?.dark || '#8392A5', // icon color
    //   darker: themeSetting?.colors?.secondary?.darker || '#525f76',
    //   contrastText: themeSetting?.colors?.secondary?.contrastText || contrastText,
    //   disableColor: contrastText
    // },
    secondary: {
      lighter: themeSetting?.colors?.background?.softGrey || "#bebebe", // item hover
      light: themeSetting?.colors?.grey.lighter || "#a9a9a9", // item active
      main: themeSetting?.colors?.grey?.main || "#7f7f7f",
      dark: themeSetting?.colors?.grey?.dark || "#6a6a6a", // icon color
      darker: themeSetting?.colors?.grey?.darker || "#3f3f3f",
      contrastText:
        themeSetting?.colors?.secondary?.contrastText || contrastText,
      disableColor: contrastText,
    },
    error: {
      lighter: themeSetting?.colors?.error?.lighter || "#f8d7da",
      light: themeSetting?.colors?.error?.light || "#f5c2c7",
      main: themeSetting?.colors?.error?.main || "#dc3545",
      dark: themeSetting?.colors?.error?.dark || "#bb2d3b",
      darker: themeSetting?.colors?.error?.darker || "#b02a37",
      contrastText,
      disableColor: contrastText,
    },
    // warning: {
    //   lighter: themeSetting?.colors?.warning?.lighter || '#fff3cd',
    //   light: themeSetting?.colors?.warning?.light || '#ffecb5',
    //   main: themeSetting?.colors?.warning?.main || '#ffc107',
    //   dark: themeSetting?.colors?.warning?.dark || '#ffca2c',
    //   darker: themeSetting?.colors?.warning?.darker || '#ffcd39',
    //   contrastText: contrastText,
    //   disableColor
    warning: {
      lighter: "#fff8e1", // 50
      light: "#ffe082", // 200
      main: "#ffc107", // 500
      dark: "#ffa000", // 700
      darker: "#ff6f00", // 900
      contrastText: contrastText,
      disableColor,
    },
    info: {
      lighter: themeSetting?.colors?.info?.lighter || "#ccf1f6",
      light: themeSetting?.colors?.info?.light || "#b3eaf2",
      main: themeSetting?.colors?.info?.main || "#00b8d4",
      dark: themeSetting?.colors?.info?.dark || "#26c3da",
      darker: themeSetting?.colors?.info?.darker || "#33c6dd",
      contrastText: contrastText,
      disableColor,
    },
    success: {
      lighter: themeSetting?.colors?.success?.lighter || "#cee7d9",
      light: themeSetting?.colors?.success?.light || "#b6dbc6",
      main: themeSetting?.colors?.success?.main || "#0c8842",
      dark: themeSetting?.colors?.success?.dark || "#0a7438",
      darker: themeSetting?.colors?.success?.darker || "#0a6d35",
      contrastText,
      disableColor: contrastText,
    },
    light: {
      lighter: "#eeeff4",
      light: "#e3e7ed",
      main: "#f4f5f8",
      dark: "#cfd0d3",
      darker: "#c3c4c6",
      contrastText: "#000",
      disableColor,
    },
    dark: {
      lighter: "#97a3b9",
      light: "#8e9bb3",
      main: "#1c273c",
      dark: "#3e4759",
      darker: "#495263",
      contrastText,
      disableColor: contrastText,
    },
    text: {
      primary: themeSetting?.colors?.text?.primary || "#001737",
      secondary: themeSetting?.colors?.text?.secondary || "#8392A5",
      disabled: themeSetting?.colors?.text?.disabled || "#8392A5",
      dark: "#1B2E4B",
    },
    background: {
      paper: themeSetting?.colors?.background?.paper || "#fff",
      default: themeSetting?.colors?.background?.default || "#fff",
      card: "#F5F6FA",
      softGrey: themeSetting?.colors?.background?.softGrey,
      darkGrey: "#ececec",
      lightGrey: themeSetting?.colors?.background?.lightGrey,
    },
    divider: themeSetting?.colors?.divider || "#D9D9D9",
    border: {
      light: "#F0F0F0",
      main: themeSetting?.colors?.divider, // "D9D9D9"
      dark: "#a1a1a1",
    },
    grey: greyColors,
    header: grey[2],
    link: themeSetting?.colors?.primary?.main || "#0168fa",
  };
};

export default DashForge;
