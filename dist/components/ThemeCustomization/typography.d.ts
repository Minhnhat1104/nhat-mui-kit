import { TypographyVariantsOptions } from '@mui/material/styles';
import { ThemeSetting } from './types/themeSetting';

declare const Typography: (data: ThemeSetting | null) => TypographyVariantsOptions;
export default Typography;
