import { Theme } from '@mui/material/styles';

export default function Button(theme: Theme): {
    MuiButton: {
        defaultProps: {
            disableElevation: boolean;
        };
        styleOverrides: {
            root: {
                fontSize: import("csstype").Property.FontSize<string | number> | undefined;
                fontWeight: import("csstype").Property.FontWeight | undefined;
                "&::after": {
                    content: string;
                    display: string;
                    position: string;
                    left: number;
                    top: number;
                    width: string;
                    height: string;
                    borderRadius: number;
                    opacity: number;
                    transition: string;
                };
                "&:active::after": {
                    position: string;
                    borderRadius: number;
                    left: number;
                    top: number;
                    opacity: number;
                    transition: string;
                };
            };
            sizeSmall: {
                height: number;
            };
            sizeMedium: {
                height: number;
            };
            sizeLarge: {
                height: number;
            };
            contained: ({ ownerState }: any) => {
                "&.Mui-disabled": {
                    backgroundColor: string;
                    color: string;
                };
            };
            outlined: ({ ownerState }: any) => {};
            text: ({ ownerState }: any) => {
                "&.Mui-disabled"?: {
                    color: string;
                } | undefined;
                boxShadow: string;
                "&:hover": {
                    boxShadow: string;
                };
            };
            greyLight: ({ ownerState }: any) => {
                "&.Mui-disabled": {
                    color: string;
                    backgroundColor: string;
                };
            } | {
                "&.Mui-disabled": {
                    color: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&.Mui-disabled": {
                    color: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&.Mui-disabled": {
                    color: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
            } | {
                "&.Mui-disabled": {
                    color: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&.Mui-disabled": {
                    color: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            };
            endIcon: {
                "&>*:nth-of-type(1)": {
                    fontSize: string;
                };
            };
            startIcon: {
                "&>*:nth-of-type(1)": {
                    fontSize: string;
                };
            };
            dashed: {
                "&.MuiButton-dashedPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                border: string;
            } | {
                "&.MuiButton-dashedPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
                border: string;
            } | {
                "&.MuiButton-dashedPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
                border: string;
            } | {
                "&.MuiButton-dashedPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                border: string;
            } | {
                "&.MuiButton-dashedPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
                border: string;
            } | {
                "&.MuiButton-dashedPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-dashedWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
                border: string;
            };
            shadow: {
                "&.MuiButton-shadowPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
            } | {
                "&.MuiButton-shadowPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&.MuiButton-shadowPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&.MuiButton-shadowPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
            } | {
                "&.MuiButton-shadowPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&.MuiButton-shadowPrimary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSecondary": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowError": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowSuccess": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowInfo": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.MuiButton-shadowWarning": {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow?: undefined;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    backgroundColor: string;
                    boxShadow: any;
                    "&:hover": {
                        boxShadow: string;
                        backgroundColor: string;
                        color?: undefined;
                        borderColor?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        borderColor: string;
                        boxShadow?: undefined;
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                    "&:hover": {
                        color: string;
                        borderColor: string;
                        backgroundColor?: undefined;
                        boxShadow?: undefined;
                    };
                } | {
                    "&::after": {
                        boxShadow: string;
                    };
                    "&:active::after": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        outline: string;
                        outlineOffset: number;
                    };
                    color: string | undefined;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        boxShadow?: undefined;
                        borderColor?: undefined;
                    };
                } | undefined;
                "&.Mui-disabled": {
                    color: string;
                    borderColor: string;
                    backgroundColor: string;
                };
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            };
            containedPrimary: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            containedSecondary: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            containedError: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            containedSuccess: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            containedInfo: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            containedWarning: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            outlinedPrimary: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            outlinedSecondary: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            outlinedError: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            outlinedSuccess: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            outlinedInfo: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            outlinedWarning: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            textPrimary: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            textSecondary: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            textError: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            textSuccess: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            textInfo: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            textWarning: {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                "&:hover": {
                    backgroundColor: string;
                    boxShadow?: undefined;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                backgroundColor: string;
                boxShadow: any;
                "&:hover": {
                    boxShadow: string;
                    backgroundColor: string;
                    color?: undefined;
                    borderColor?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow?: undefined;
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string;
                borderColor: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    borderColor: string;
                    backgroundColor?: undefined;
                    boxShadow?: undefined;
                };
            } | {
                "&::after": {
                    boxShadow: string;
                };
                "&:active::after": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    outline: string;
                    outlineOffset: number;
                };
                color: string | undefined;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow?: undefined;
                    borderColor?: undefined;
                };
            } | undefined;
            sizeExtraSmall: {
                minWidth: number;
                fontSize: string;
                padding: string;
            };
        };
        variants: ({
            props: {
                variant: string;
                color: "primary" | "secondary" | "success" | "error" | "info" | "warning";
            };
            style: {
                color: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                };
                "&:active": {
                    color: string;
                    backgroundColor: string;
                };
            };
        } | {
            props: {
                variant: string;
            };
            style: {
                background: string;
                color: string;
                "&:hover": {
                    background: string;
                    color: string;
                };
                "&:active": {
                    color: string;
                    background: string;
                };
            };
        })[];
    };
};
