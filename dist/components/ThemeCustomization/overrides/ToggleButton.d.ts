import { Theme } from '@mui/material/styles';

export default function ToggleButton(theme: Theme): {
    MuiToggleButton: {
        styleOverrides: {
            root: {
                fontSize: import("csstype").Property.FontSize<string | number> | undefined;
                fontWeight: import("csstype").Property.FontWeight | undefined;
                '&.Mui-disabled': {
                    borderColor: string;
                    color: string;
                };
                '&:focus-visible': {
                    outline: string;
                    outlineOffset: number;
                };
            };
        };
    };
};
