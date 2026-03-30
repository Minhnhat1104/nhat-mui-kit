import { ReactNode } from 'react';

interface ThemeCustomizationProps {
    color: string;
    children: ReactNode;
}
type Color = "primary" | "secondary" | "success" | "error" | "info" | "warning";
export declare const paletteColors: Color[];
declare const ThemeCustomization: ({ color, children }: ThemeCustomizationProps) => import("react/jsx-runtime").JSX.Element;
export default ThemeCustomization;
