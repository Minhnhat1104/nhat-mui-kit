import { TypographyVariantsOptions } from "@mui/material/styles";

const Typography = (): TypographyVariantsOptions => ({
  htmlFontSize: 16,
  fontFamily: `'Roboto', sans-serif`,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    fontSize: "2.375rem",
  },
  h2: {
    fontWeight: 600,
    fontSize: "1.875rem",
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.313rem",
  },
  h4: {
    fontWeight: 600,
    fontSize: "0.875rem",
  },
  h5: {
    fontWeight: 600,
    fontSize: "0.813rem",
  },
  h6: {
    fontWeight: 500,
    fontSize: "0.625rem",
  },
  caption: {
    fontWeight: 500,
    fontSize: "0.75rem",
  },
  body1: {
    fontWeight: 400,
    fontSize: "0.8125rem",
  },
  body2: {
    fontWeight: 400,
    fontSize: "0.75rem",
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: "0.875rem",
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: "0.75rem",
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    textTransform: "capitalize",
  },
});

export default Typography;
