// material-ui
import { alpha, Theme } from '@mui/material/styles';

export default function ThemeTypography(theme: Theme) {
  return {
    MuiTypography : {
      styleOverrides: {
        root: {
          borderRadius: 6,
          p: '4px 16px',
        },
      },
      variants: [
        {
          props: { component: 'label' },
          style: {
            fontSize: '14px',
            fontWeight: 500,
            color: theme.palette.text.secondary
          },
        },
      ]
    },
  };
}
