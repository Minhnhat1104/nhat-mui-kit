import { SxProps } from '@mui/material';
import * as React from "react";
interface NumberInputProps {
    value: number;
    onChange: (nVal: number) => void;
    min?: number;
    max?: number;
    endAdornment?: string | React.ReactNode;
    sx?: SxProps;
}
declare const _default: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<React.ForwardedRef<HTMLDivElement>>>;
export default _default;
