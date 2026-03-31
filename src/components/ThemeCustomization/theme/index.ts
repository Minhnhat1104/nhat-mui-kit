import { PaletteThemeProps } from "../types/theme";
import DashForge from "./dashforge";

const Theme = (mode: "light" | "dark" = "light"): PaletteThemeProps => {
  return DashForge(mode);
};

export default Theme;
