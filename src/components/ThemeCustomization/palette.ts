import ThemeOption from "./theme";
import { ThemeSetting } from "./types/themeSetting";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (data: ThemeSetting | null) => {
  const paletteColor = ThemeOption(data);

  return {
    common: {
      black: "#000",
      white: "#fff",
    },
    ...paletteColor,
    action: {
      disabled: data?.colors?.text?.secondary,
    },
  };
};

export default Palette;
