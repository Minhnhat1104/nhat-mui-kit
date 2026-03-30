import { Theme } from '@mui/material';

export default function Tooltip(theme: Theme): {
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                background: string;
            };
            arrow: {
                color: string;
            };
        };
    };
};
