// material-ui
// eslint-disable-next-line
import * as Theme from "@mui/material/styles";

// project import
import { CustomShadowProps } from "@base/types/theme";

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: CustomShadowProps;
  }

  interface TypeBackground {
    card: string;
    softGrey: string;
    lightGrey: string;
    darkGrey: string;
  }

  interface TypographyVariantsOptions {
    fontWeightSemiBold?: number;
  }
}
