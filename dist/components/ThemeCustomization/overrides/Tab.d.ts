import { Theme } from '@mui/material/styles';

export default function Tab(theme: Theme): {
    MuiTab: {
        styleOverrides: {
            root: {
                fontSize: import("csstype").Property.FontSize<string | number> | undefined;
                fontWeight: import("csstype").Property.FontWeight | undefined;
                minHeight: number;
                color: string;
                borderRadius: number;
                '&:hover': {
                    backgroundColor: string;
                    color: string;
                };
                '&:focus-visible': {
                    borderRadius: number;
                    outline: string;
                    outlineOffset: number;
                };
            };
        };
    };
};
