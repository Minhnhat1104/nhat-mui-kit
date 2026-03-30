import { ChevronRight } from "react-feather";

import { Theme } from "@mui/material/styles";

// ==============================|| OVERRIDES - ALERT TITLE ||============================== //

export default function AccordionSummary(theme: Theme) {
  const { palette, spacing } = theme;

  return {
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: <ChevronRight size={20} />,
      },
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          flexDirection: "row",
          minHeight: 46,
        },
        expandIconWrapper: {
          "&.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        },
        content: {
          marginTop: spacing(1.25),
          marginBottom: spacing(1.25),
          marginLeft: spacing(1),
        },
      },
    },
  };
}
