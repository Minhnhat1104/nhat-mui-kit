import { Theme } from '@mui/material/styles';

export default function ListItemIcon(theme: Theme): {
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: number;
                color: string;
                '& svg': {
                    width: number;
                    height: number;
                    color: string;
                    strokeWidth: number;
                };
            };
        };
    };
};
