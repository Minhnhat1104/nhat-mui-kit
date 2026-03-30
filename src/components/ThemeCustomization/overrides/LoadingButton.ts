// ==============================|| OVERRIDES - LOADING BUTTON ||============================== //

import { Theme } from '@mui/material';

import { paletteColors } from '..';

export default function LoadingButton(theme: Theme) {
  const customVariants = paletteColors?.reduce((prev: any[], color) => {
    const { darker, dark, main, light, lighter } = theme.palette[color];

    prev.push({
      props: { color },
      style: {
        '& .MuiLoadingButton-loadingIndicator': {
          color: main
        }
      }
    });

    ['text', 'light']?.forEach((variant) => {
      prev.push({
        props: { color, variant: variant, loading: true },
        style: {
          background: lighter
        }
      });
    });

    ['contained']?.forEach((variant) => {
      prev.push({
        props: { color, variant: variant, loading: true },
        style: {
          '&.MuiLoadingButton-loading': {
            color: theme.palette.common.white
          }
        }
      });
    });

    return prev;
  }, []);

  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          padding: '6px 16px',
          '&.MuiLoadingButton-loading': {
            opacity: 0.6,
            textShadow: 'none'
          }
        }
      },
      variants: [
        ...customVariants,
        {
          props: { variant: 'greyLight' },
          style: {
            '& .MuiLoadingButton-loadingIndicator': {
              color: theme.palette.secondary.main
            }
          }
        }
      ]
    }
  };
}
