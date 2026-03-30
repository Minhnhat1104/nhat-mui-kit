export interface ThemeSetting {
  fontFamily: string;
  fontSize: string;
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  colors: {
    primary: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
      contrastText: string;
    };
    secondary: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
      contrastText: string;
    };
    error: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
      contrastText: string;
    };
    warning: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
      contrastText: string;
    };
    info: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
      contrastText: string;
    };
    success: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
      contrastText: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    background: {
      paper: string;
      default: string;
      softGrey: string;
      lightGrey: string;
    };
    grey: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
    divider: string;
  };
  typography: {
    h1: {
      fontWeight: number;
      fontSize: string;
    };
    h2: {
      fontWeight: number;
      fontSize: string;
    };
    h3: {
      fontWeight: number;
      fontSize: string;
    };
    h4: {
      fontWeight: number;
      fontSize: string;
    };
    h5: {
      fontWeight: number;
      fontSize: string;
    };
    h6: {
      fontWeight: number;
      fontSize: string;
    };
    caption: {
      fontWeight: number;
      fontSize: string;
    };
    body1: {
      fontWeight: number;
      fontSize: string;
    };
    body2: {
      fontWeight: number;
      fontSize: string;
    };
    subtitle1: {
      fontSize: string;
      fontWeight: number;
    };
    subtitle2: {
      fontSize: string;
      fontWeight: number;
    };
    overline: {
      lineHeight: number;
    };
  };
}
