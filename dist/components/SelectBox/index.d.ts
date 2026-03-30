import { MenuProps, SelectVariants, SxProps } from '@mui/material';

interface SelectBoxProps {
    value: any | undefined;
    options: any[];
    onChange: (val: any) => void;
    size?: "small" | "medium" | undefined;
    showIcon?: boolean;
    sx?: SxProps;
    disablePortal?: boolean;
    useClear?: boolean;
    placeholder?: string;
    MenuProps?: Partial<MenuProps>;
    fieldLabel?: string;
    fieldValue?: string;
    isLoading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    variant?: SelectVariants;
    closeOnSelect?: boolean;
}
declare const SelectBox: (props: SelectBoxProps) => import("react/jsx-runtime").JSX.Element;
export default SelectBox;
