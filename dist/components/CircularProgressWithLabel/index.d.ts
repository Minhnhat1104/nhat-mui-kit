import { SxProps } from '@mui/material';

interface CircularProgressWithLabelProps {
    sx?: SxProps;
    variant?: 'determinate' | 'indeterminate';
    value: number;
}
declare const CircularProgressWithLabel: (props: CircularProgressWithLabelProps) => import("react/jsx-runtime").JSX.Element;
export default CircularProgressWithLabel;
