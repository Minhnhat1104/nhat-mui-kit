import { PaletteThemeProps } from "../types/theme";
import DashForge from "./dashforge";

const Theme = (data: any): PaletteThemeProps => {
  return DashForge(data);
};

export default Theme;
