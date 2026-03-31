import { Theme } from '@mui/material/styles';

export default function IconButton(theme: Theme): {
    MuiIconButton: {
        styleOverrides: {
            root: {};
            sizeSmall: {
                width: number;
                height: number;
                "& svg": {
                    flexShrink: number;
                    width: number;
                    height: number;
                };
            };
            sizeMedium: {
                width: number;
                height: number;
                "& svg": {
                    flexShrink: number;
                    width: number;
                    height: number;
                };
            };
            sizeLarge: {
                width: number;
                height: number;
                "& svg": {
                    flexShrink: number;
                    width: number;
                    height: number;
                };
            };
        };
        defaultProps: {
            shape: string;
        };
        variants: ({
            props: {
                shape: "rounded";
            };
            style: {
                borderRadius: number;
            };
        } | {
            props: {
                shape: "square";
            };
            style: {
                borderRadius: number;
            };
        })[];
    };
};
