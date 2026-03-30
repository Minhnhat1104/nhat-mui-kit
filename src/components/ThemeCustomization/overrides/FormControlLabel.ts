// material-ui
import { Theme } from '@mui/material/styles';

// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function FormControlLabel(theme: Theme) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
            fontSize: theme.typography.h5.fontSize,
            fontWeight: theme.typography.fontWeightRegular
        }
      }
    }
  };
}
