import { default as React } from 'react';
import { Icon } from 'react-feather';

interface OutlinedSelectProps {
    open?: boolean;
    value: string | string[];
    placeholder: string;
    onClick: () => void;
    onClear?: () => void;
    endIcon?: Icon;
    disabled?: boolean;
    id?: string;
}
declare const _default: React.ForwardRefExoticComponent<OutlinedSelectProps & React.RefAttributes<unknown>>;
export default _default;
