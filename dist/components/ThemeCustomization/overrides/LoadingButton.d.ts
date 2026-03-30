import { Theme } from '@mui/material';

export default function LoadingButton(theme: Theme): {
    MuiLoadingButton: {
        styleOverrides: {
            root: {
                padding: string;
                '&.MuiLoadingButton-loading': {
                    opacity: number;
                    textShadow: string;
                };
            };
        };
        variants: any[];
    };
};
