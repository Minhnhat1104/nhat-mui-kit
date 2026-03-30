import { Theme } from '@mui/material';

export default function Select(theme: Theme): {
    MuiSelect: {
        variants: {
            props: {
                variant: string;
            };
            style: {
                color: string;
                backgroundColor: string;
                borderBottom: string;
                borderRadius: number;
                '&.Mui-focused': {
                    backgroundColor: string;
                };
                '&:hover': {
                    backgroundColor: string;
                };
                '& .MuiSelect-select:focus': {
                    backgroundColor: string;
                };
                '& .MuiSelect-select': {
                    borderRadius: number;
                    padding: string;
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: string;
                    };
                };
                ':before': {
                    border: string;
                };
                ':after': {
                    border: string;
                };
            };
        }[];
    };
};
