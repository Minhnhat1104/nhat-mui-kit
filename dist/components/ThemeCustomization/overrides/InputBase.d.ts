import { Theme } from '@mui/material';

export default function InputBase(theme: Theme): {
    MuiInputBase: {
        styleOverrides: {
            root: {
                fontSize: import("csstype").Property.FontSize<string | number> | undefined;
                fontWeight: import("csstype").Property.FontWeight | undefined;
                '&.Mui-disabled fieldset.MuiOutlinedInput-notchedOutline': {
                    borderColor: string;
                };
                background: string;
            };
            sizeSmall: {
                fontSize: string;
            };
        };
    };
};
