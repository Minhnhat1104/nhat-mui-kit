import { default as React } from 'react';

interface SplitRightContainerProps {
    leftPane: React.ReactNode;
    rightPane: React.ReactNode;
    showRightToggle?: boolean;
    initLeftSize?: number;
    onDragEnd?: (sizes: number[]) => void;
}
declare const SplitRightContainer: ({ leftPane, rightPane, showRightToggle, initLeftSize, onDragEnd, }: SplitRightContainerProps) => import("react/jsx-runtime").JSX.Element;
export default SplitRightContainer;
