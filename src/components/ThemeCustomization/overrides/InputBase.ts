// ==============================|| OVERRIDES - INPUT BASE ||============================== //

import { Theme } from '@mui/material';

export default function InputBase(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: theme.typography.h5.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          '&.Mui-disabled fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.border.light
          },
          background: theme.palette.background.paper
        },
        sizeSmall: {
          fontSize: '0.75rem'
        }
      }
    }
  };
}
