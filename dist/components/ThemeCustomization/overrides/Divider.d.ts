import { Theme } from '@mui/material';

export default function Divider(theme: Theme): {
    MuiDivider: {
        styleOverrides: {
            root: {
                borderColor: string;
            };
        };
    };
};
