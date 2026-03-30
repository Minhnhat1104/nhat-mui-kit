import { default as React } from 'react';

export declare const SPLIT_MAX_SIZE = 500;
export declare const SPLIT_MIN_SIZE = 320;
interface SplitViewProps {
    isView?: boolean;
    leftPane: React.ReactNode;
    rightPane: React.ReactNode;
    isSplitMode?: boolean;
    leftInitSize?: number;
    onDragEnd?: (sizes: number[]) => void;
    leftMinSize?: number;
    leftMaxSize?: number;
}
declare const SplitView: (props: SplitViewProps) => import("react/jsx-runtime").JSX.Element;
export default SplitView;
