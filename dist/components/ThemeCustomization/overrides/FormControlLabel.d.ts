import { Theme } from '@mui/material/styles';

export default function FormControlLabel(theme: Theme): {
    MuiFormControlLabel: {
        styleOverrides: {
            label: {
                fontSize: import("csstype").Property.FontSize<string | number> | undefined;
                fontWeight: import("csstype").Property.FontWeight | undefined;
            };
        };
    };
};
