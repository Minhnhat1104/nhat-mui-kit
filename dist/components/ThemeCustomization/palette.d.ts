declare const Palette: (mode?: "light" | "dark") => {
    action: {
        disabled: string | undefined;
    };
    primary: import('@mui/material').SimplePaletteColorOptions;
    secondary: import('@mui/material').SimplePaletteColorOptions;
    error: import('@mui/material').SimplePaletteColorOptions;
    warning: import('@mui/material').SimplePaletteColorOptions;
    info: import('@mui/material').SimplePaletteColorOptions;
    success: import('@mui/material').SimplePaletteColorOptions;
    grey: import('@mui/material').PaletteColorOptions;
    magenta?: import('@mui/material').SimplePaletteColorOptions;
    purple?: import('@mui/material').SimplePaletteColorOptions;
    orange?: import('@mui/material').SimplePaletteColorOptions;
    yellow?: import('@mui/material').SimplePaletteColorOptions;
    lime?: import('@mui/material').SimplePaletteColorOptions;
    volcano?: import('@mui/material').SimplePaletteColorOptions;
    light?: import('@mui/material').SimplePaletteColorOptions;
    dark?: import('@mui/material').SimplePaletteColorOptions;
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
    mode: "dark" | "light";
    common: {
        black: string;
        white: string;
    };
};
export default Palette;
