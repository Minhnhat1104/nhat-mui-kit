import { Theme } from '@mui/material/styles';

export default function OutlinedInput(theme: Theme): {
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: string;
            };
            notchedOutline: {
                borderColor: string;
            };
            root: {
                "&.Mui-error": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        transition: string;
                        borderColor: string;
                    };
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: string;
                    };
                    "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: string;
                        };
                    };
                };
                "& .MuiOutlinedInput-notchedOutline": {
                    transition: string;
                    borderColor: string;
                };
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: string;
                };
                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: string;
                    };
                };
            };
            inputSizeSmall: {
                padding: string;
            };
            inputMultiline: {
                padding: number;
            };
            colorSecondary: {
                "& .MuiOutlinedInput-notchedOutline": {
                    transition: string;
                    borderColor: string;
                };
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: string;
                };
                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: string;
                    };
                };
            };
            colorError: {
                "& .MuiOutlinedInput-notchedOutline": {
                    transition: string;
                    borderColor: string;
                };
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: string;
                };
                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: string;
                    };
                };
            };
            colorWarning: {
                "& .MuiOutlinedInput-notchedOutline": {
                    transition: string;
                    borderColor: string;
                };
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: string;
                };
                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: string;
                    };
                };
            };
            colorInfo: {
                "& .MuiOutlinedInput-notchedOutline": {
                    transition: string;
                    borderColor: string;
                };
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: string;
                };
                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: string;
                    };
                };
            };
            colorSuccess: {
                "& .MuiOutlinedInput-notchedOutline": {
                    transition: string;
                    borderColor: string;
                };
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: string;
                };
                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: string;
                    };
                };
            };
        };
    };
};
