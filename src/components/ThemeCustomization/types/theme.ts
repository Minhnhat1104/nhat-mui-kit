// material-ui
import {
  SimplePaletteColorOptions,
  PaletteColorOptions,
} from "@mui/material/styles";

export type PalleteColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export type PaletteThemeProps = {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
  grey: PaletteColorOptions;
  magenta?: SimplePaletteColorOptions;
  purple?: SimplePaletteColorOptions;
  orange?: SimplePaletteColorOptions;
  yellow?: SimplePaletteColorOptions;
  lime?: SimplePaletteColorOptions;
  volcano?: SimplePaletteColorOptions;
  light?: SimplePaletteColorOptions;
  dark?: SimplePaletteColorOptions;
  header: string;
  link: string;
  text?: {
    primary: string;
    secondary: string;
    dark: string;
    disabled: string;
  };
  background: {
    paper: string;
    default: string;
    card: string;
    softGrey: string;
    darkGrey: string;
    lightGrey: string;
  };
  divider: string;
  border: {
    light: string;
    main: string;
    dark: string;
  };
};

export type CustomShadowProps = {
  rowHover: string;
  popper: string;
  button: string;
  text: string;
  z1: string;
  primary: string;
  primaryButton: string;
  secondary: string;
  secondaryButton: string;
  error: string;
  errorButton: string;
  warning: string;
  warningButton: string;
  info: string;
  infoButton: string;
  success: string;
  successButton: string;
  grey: string;
  greyButton: string;
  wrapper: string;
};
