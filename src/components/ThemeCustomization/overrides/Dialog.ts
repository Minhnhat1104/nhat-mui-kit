// material-ui
import { alpha } from '@mui/material/styles';

// ==============================|| OVERRIDES - DIALOG ||============================== //

export default function Dialog() {
  return {
    MuiDialog: {
      styleOverrides: {
        root: {
          '& .MuiDialog-container': {
            alignItems: 'flex-start'
          },
          '& .MuiBackdrop-root.MuiModal-backdrop': {
            backgroundColor: 'rgba(15,21,32,0.2)'
          },
          zIndex: 1000
        }
      }
    }
  };
}
