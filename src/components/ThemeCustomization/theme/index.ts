import { PaletteThemeProps } from "../types/theme";
import MuiColor from "./MuiColor";

const Theme = (mode: "light" | "dark"): PaletteThemeProps => {
  return MuiColor(mode);
};

export default Theme;
