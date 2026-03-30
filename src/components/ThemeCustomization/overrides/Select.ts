// material-ui
import { Theme } from '@mui/material';

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.lightGrey,
            borderBottom: 'none',
            borderRadius: 4,
            '&.Mui-focused': {
              backgroundColor: theme.palette.background.softGrey
            },
            '&:hover': {
              backgroundColor: theme.palette.background.softGrey
            },
            '& .MuiSelect-select:focus': {
              backgroundColor: theme.palette.background.softGrey
            },
            '& .MuiSelect-select': {
              borderRadius: 4,
              padding: '10.5px 32px 10.5px 12px',
              '&.MuiInputBase-inputSizeSmall': {
                padding: '8.5px 32px 8.5px 12px'
              }
            },
            ':before': {
              border: 'none !important'
            },
            ':after': {
              border: 'none !important'
            }
          }
        }
      ]
    }
  };
}
