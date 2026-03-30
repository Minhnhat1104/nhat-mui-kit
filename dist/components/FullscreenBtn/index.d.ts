import { default as React } from 'react';
import { SxProps } from '@mui/material';

interface FullscreenBtnProps {
    fullscreenRef?: React.RefObject<HTMLDivElement>;
    onChange: (nVal: boolean) => void;
    sx?: SxProps;
}
declare const FullscreenBtn: (props: FullscreenBtnProps) => import("react/jsx-runtime").JSX.Element;
export default FullscreenBtn;
