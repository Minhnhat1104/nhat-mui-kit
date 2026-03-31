import { ReactNode } from 'react';

interface ThemeCustomizationProps {
    mode?: "light" | "dark";
    children: ReactNode;
}
type Color = "primary" | "secondary" | "success" | "error" | "info" | "warning";
export declare const paletteColors: Color[];
declare const ThemeCustomization: ({ mode, children }: ThemeCustomizationProps) => import("react/jsx-runtime").JSX.Element;
export default ThemeCustomization;
