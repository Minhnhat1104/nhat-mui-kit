import ThemeOption from "./theme";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode: "light" | "dark") => {
  const paletteColor = ThemeOption(mode);

  return {
    mode,
    common: {
      black: "#000",
      white: "#fff",
    },
    ...paletteColor,
    action: {
      disabled: paletteColor?.text?.disabled,
    },
  };
};

export default Palette;
