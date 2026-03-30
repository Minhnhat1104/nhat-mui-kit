interface CounterProps {
    label: string | number;
    color?: 'primary' | 'grey';
    size?: 'small' | 'medium' | 'large';
    fontSize?: number;
}
export declare const counterClass = "groupware-table-counter";
declare const Counter: (props: CounterProps) => import("react/jsx-runtime").JSX.Element;
export default Counter;
