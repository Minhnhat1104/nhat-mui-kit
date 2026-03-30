// material-ui
import { alpha, PaletteOptions } from "@mui/material/styles";
import { CustomShadowProps } from "./types/theme";

// types
// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const CustomShadows = (themePallete: PaletteOptions): CustomShadowProps => ({
  rowHover:
    "inset 1px 0 0 rgb(218,220,224),inset -1px 0 0 rgb(218,220,224),0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)",
  popper: "0px 4px 80px 0px #00000033",
  button: `0 2px #0000000b`,
  text: `0 -1px 0 rgb(0 0 0 / 12%)`,
  z1: `0px 1px 4px ${alpha(themePallete?.grey?.[900] || "#d9d9d9", 0.08)}`,
  primary: `0 0 0 2px ${alpha(themePallete?.primary?.main || "#d9d9d9", 0.2)}`,
  secondary: `0 0 0 2px ${alpha(themePallete?.secondary?.main || "#d9d9d9", 0.2)}`,
  error: `0 0 0 2px ${alpha(themePallete?.error?.main || "#d9d9d9", 0.2)}`,
  warning: `0 0 0 2px ${alpha(themePallete?.warning?.main || "#d9d9d9", 0.2)}`,
  info: `0 0 0 2px ${alpha(themePallete?.info?.main || "#d9d9d9", 0.2)}`,
  success: `0 0 0 2px ${alpha(themePallete?.success?.main || "#d9d9d9", 0.2)}`,
  grey: `0 0 0 2px ${alpha(themePallete?.grey?.[500] || "#d9d9d9", 0.2)}`,
  primaryButton: `0 14px 12px ${alpha(themePallete?.primary?.main || "#d9d9d9", 0.2)}`,
  secondaryButton: `0 14px 12px ${alpha(themePallete?.secondary?.main || "#d9d9d9", 0.2)}`,
  errorButton: `0 14px 12px ${alpha(themePallete?.error?.main || "#d9d9d9", 0.2)}`,
  warningButton: `0 14px 12px ${alpha(themePallete?.warning?.main || "#d9d9d9", 0.2)}`,
  infoButton: `0 14px 12px ${alpha(themePallete?.info?.main || "#d9d9d9", 0.2)}`,
  successButton: `0 14px 12px ${alpha(themePallete?.success?.main || "#d9d9d9", 0.2)}`,
  greyButton: `0 14px 12px ${alpha(themePallete?.grey?.[500] || "#d9d9d9", 0.2)}`,
  // wrapper: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' // old used in new GW
  // wrapper: '0px 0px 35px 0px rgba(154, 161, 171, 0.15)' // used in new GW
  wrapper: "rgba(0, 0, 0, 0.08) 0px 1px 4px", // mantis theme. Refer: https://mantisdashboard.io/login
});

export default CustomShadows;
