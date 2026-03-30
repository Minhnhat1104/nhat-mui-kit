// material-ui
import { Theme } from '@mui/material/styles';

// ==============================|| OVERRIDES - TABLE ROW ||============================== //

export default function TableBody(theme: Theme) {
  return {
    MuiTableBody: {
      styleOverrides: {
        root: {}
      }
    }
  };
}
