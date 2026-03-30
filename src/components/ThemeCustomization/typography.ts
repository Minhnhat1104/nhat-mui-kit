import { TypographyVariantsOptions } from "@mui/material/styles";
import { ThemeSetting } from "./types/themeSetting";

const Typography = (data: ThemeSetting | null): TypographyVariantsOptions => ({
  htmlFontSize: data?.fontSize
    ? typeof data?.fontSize === "string"
      ? +data?.fontSize?.replace("px", "")
      : data?.fontSize
    : 16,
  fontFamily: data?.fontFamily
    ? `${data?.fontFamily}, NotoSansKR, 'IBM Plex Sans', sans-serif`
    : `NotoSansKR, 'IBM Plex Sans', sans-serif`,
  fontWeightLight: data?.fontWeight?.light ?? 300,
  fontWeightRegular: data?.fontWeight?.regular ?? 400,
  fontWeightMedium: data?.fontWeight?.medium ?? 500,
  fontWeightSemiBold: data?.fontWeight?.semibold ?? 600,
  fontWeightBold: data?.fontWeight?.bold ?? 700,
  h1: {
    fontWeight: data?.typography?.h1?.fontWeight ?? 600,
    fontSize: data?.typography?.h1?.fontSize ?? "2.375rem",
  },
  h2: {
    fontWeight: data?.typography?.h2?.fontWeight ?? 600,
    fontSize: data?.typography?.h2?.fontSize ?? "1.875rem",
  },
  h3: {
    fontWeight: data?.typography?.h3?.fontWeight ?? 600,
    fontSize: data?.typography?.h3?.fontSize ?? "1.313rem",
  },
  h4: {
    fontWeight: data?.typography?.h4?.fontWeight ?? 600,
    fontSize: data?.typography?.h4?.fontSize ?? "0.875rem",
  },
  h5: {
    fontWeight: data?.typography?.h5?.fontWeight ?? 600,
    fontSize: data?.typography?.h5?.fontSize ?? "0.813rem",
  },
  h6: {
    fontWeight: data?.typography?.h6?.fontWeight ?? 500,
    fontSize: data?.typography?.h6?.fontSize ?? "0.625rem",
  },
  caption: {
    fontWeight: data?.typography?.caption?.fontWeight ?? 500,
    fontSize: data?.typography?.caption?.fontSize ?? "0.75rem",
  },
  body1: {
    fontWeight: data?.typography?.body1?.fontWeight ?? 400,
    fontSize: data?.typography?.body1?.fontSize ?? "0.8125rem",
  },
  body2: {
    fontWeight: data?.typography?.body2?.fontWeight ?? 400,
    fontSize: data?.typography?.body2?.fontSize ?? "0.75rem",
  },
  subtitle1: {
    fontWeight: data?.typography?.subtitle1?.fontWeight ?? 600,
    fontSize: data?.typography?.subtitle1?.fontSize ?? "0.875rem",
  },
  subtitle2: {
    fontWeight: data?.typography?.subtitle2?.fontWeight ?? 600,
    fontSize: data?.typography?.subtitle2?.fontSize ?? "0.75rem",
  },
  overline: {
    lineHeight: data?.typography?.overline?.lineHeight ?? 1.66,
  },
  button: {
    textTransform: "capitalize",
  },
});

export default Typography;
