import { Theme } from '@mui/material/styles';
import { ColorProps } from '../components/ThemeCustomization/types/extended';

declare const getColors: (theme: Theme, color?: ColorProps) => import('@mui/material').PaletteColor;
export declare const getThemeColor: (theme: Theme, color?: string) => string | undefined;
export default getColors;
