// ==============================|| OVERRIDES - Tooltip ||============================== //

import { alpha, Theme, tooltipClasses } from '@mui/material';

export default function Tooltip(theme: Theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: theme.palette.grey.darker
        },
        arrow: {
          color: theme.palette.grey.darker
        }
      }
    }
  };
}
