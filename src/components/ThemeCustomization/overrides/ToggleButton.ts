// material-ui
import { Theme } from '@mui/material/styles';

// ==============================|| OVERRIDES - TOGGLE BUTTON ||============================== //

export default function ToggleButton(theme: Theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: theme.typography.h4.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          '&.Mui-disabled': {
            borderColor: theme.palette.border.light,
            color: theme.palette.text.disabled
          },
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.secondary.dark}`,
            outlineOffset: 2
          }
        }
      }
    }
  };
}
