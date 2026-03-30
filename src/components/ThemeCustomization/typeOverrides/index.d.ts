// material-ui
// eslint-disable-next-line
import * as Color from '@mui/material';

declare module '@mui/material' {
  interface Theme {
    border: {
      dark: string;
      main: string;
      light: string;
    };
  }

  interface Palette {
    border: {
      dark: string;
      main: string;
      light: string;
    };
  }

  interface PaletteOptions {
    border: {
      dark: string;
      main: string;
      light: string;
    };
  }

  interface Color {
    0?: string;
    A50?: string;
    A800?: string;
    lighter: string; // theme.palette.background.lightGrey
    light: string; // theme.palette.background.softGrey
    main: string; // theme.palette.grey.main
    dark: string; // theme.palette.grey.dark
    darker: string; // theme.palette.grey.darker
  }
}

declare global {
  interface Window {
    i18n: any;
    tinymce: any;
    userDataGlobal: any;
    ace: {
      currentPage: any;
    };
    setActiveExcelEditor: any;
    getExcelData: any;
    [x: string]: any;
  }
}
