declare const useLongPress: (props: {
    onClick: () => void;
    onLongPress: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => void;
    onClear: () => void;
    options?: {
        shouldPreventDefault: boolean;
        delay: number;
        clearOnMouseLeave: boolean;
    };
}) => {
    onMouseDown: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onTouchStart: (e: React.TouchEvent<HTMLButtonElement>) => void;
    onMouseUp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onTouchEnd: (e: React.TouchEvent<HTMLButtonElement>) => void;
};
export default useLongPress;
