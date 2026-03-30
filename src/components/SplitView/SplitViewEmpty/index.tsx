import { useTranslation } from 'react-i18next';

import DvrIcon from '@mui/icons-material/Dvr';
import { Box, Typography, useTheme } from '@mui/material';

interface EmptySplitViewProps {
  isDivider?: boolean;
}

const EmptySplitView = (props: EmptySplitViewProps) => {
  const { isDivider = true } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        position: 'relative',
        outline: 'none',
        ...(isDivider && {
          borderTop: `1px solid ${theme.palette.border.light}`
        })
      }}
    >
      <Box
        sx={{
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <DvrIcon sx={{ width: '120px', height: '100px', fill: '#e2e2e2' }} />
        <Typography my={0} component="h5">
          {t('common_please_select_an_item_to_view')}
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptySplitView;
