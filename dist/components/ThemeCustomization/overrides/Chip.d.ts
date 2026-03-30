import { Theme } from '@mui/material/styles';

export default function Chip(theme: Theme): {
    MuiChip: {
        styleOverrides: {
            root: {
                height: string;
                p: number;
                borderRadius: number;
                "&:active": {
                    boxShadow: string;
                };
                "&.MuiChip-colorPrimary": {
                    "&.Mui-focusVisible": {
                        outline: string;
                        outlineOffset: number;
                    };
                };
                "&.MuiChip-colorSecondary": {
                    "&.Mui-focusVisible": {
                        outline: string;
                        outlineOffset: number;
                    };
                };
                "&.MuiChip-colorError": {
                    "&.Mui-focusVisible": {
                        outline: string;
                        outlineOffset: number;
                    };
                };
                "&.MuiChip-colorInfo": {
                    "&.Mui-focusVisible": {
                        outline: string;
                        outlineOffset: number;
                    };
                };
                "&.MuiChip-colorSuccess": {
                    "&.Mui-focusVisible": {
                        outline: string;
                        outlineOffset: number;
                    };
                };
                "&.MuiChip-colorWarning": {
                    "&.Mui-focusVisible": {
                        outline: string;
                        outlineOffset: number;
                    };
                };
            };
            sizeSmall: {
                borderRadius: number;
                fontSize: number;
                fontWeight: number;
                "& .MuiChip-label": {
                    padding: string;
                };
            };
            sizeMedium: {
                borderRadius: number;
                fontSize: number;
                fontWeight: number;
                "& .MuiChip-label": {
                    padding: string;
                };
            };
            sizeLarge: {
                borderRadius: number;
                fontSize: number;
                fontWeight: number;
                "& .MuiChip-label": {
                    padding: string;
                };
            };
            light: {
                "&.MuiChip-lightPrimary": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-lightSecondary": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-lightError": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-lightInfo": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-lightSuccess": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-lightWarning": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                color: string;
                backgroundColor: string;
                borderColor: string;
                "& .MuiChip-deleteIcon": {
                    color: string;
                    "&:hover": {
                        color: string;
                    };
                };
            };
            combined: {
                "&.MuiChip-combinedPrimary": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-combinedSecondary": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-combinedError": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-combinedInfo": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-combinedSuccess": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                "&.MuiChip-combinedWarning": {
                    color: string;
                    backgroundColor: string;
                    borderColor: string;
                    "& .MuiChip-deleteIcon": {
                        color: string;
                        "&:hover": {
                            color: string;
                        };
                    };
                };
                color: string;
                backgroundColor: string;
                borderColor: string;
                "& .MuiChip-deleteIcon": {
                    color: string;
                    "&:hover": {
                        color: string;
                    };
                };
                border: string;
            };
        };
        variants: {
            props: {
                variant: string;
            };
            style: {
                color: string;
                backgroundColor: string;
            };
        }[];
    };
};
