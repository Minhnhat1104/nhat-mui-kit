// material-ui
import { Theme } from '@mui/material/styles';

// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function ListItemIcon(theme: Theme) {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 24,
          color: 'inherit',
          '& svg': {
            width: 13,
            height: 13,
            color: 'inherit',
            strokeWidth: 1.5
          }
        }
      }
    }
  };
}
