// material-ui
import { Theme } from '@mui/material';

// ==============================|| OVERRIDES - DIALOG ||============================== //

export default function Divider(theme: Theme) {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.border.light
        }
      }
    }
  };
}
